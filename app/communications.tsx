
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { 
  operationalMessages, 
  messageCategories, 
  communicationPhases,
  OperationalMessage,
  CommunicationPhase 
} from '@/data/operationalMessages';
import { useCommunicationLog } from '@/hooks/useCommunicationLog';
import * as Speech from 'expo-speech';

export default function CommunicationsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Tutte');
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'categories' | 'phases'>('categories');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { logs, addLog } = useCommunicationLog();

  const filteredMessages = selectedCategory === 'Tutte'
    ? operationalMessages
    : operationalMessages.filter(msg => msg.category === selectedCategory);

  const handleSendMessage = (message: OperationalMessage) => {
    addLog(message.message, 'sent', message.priority, message.category);
    Alert.alert(
      'Messaggio Inviato',
      message.message,
      [{ text: 'OK' }]
    );
  };

  const handleSpeakMessage = (text: string) => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    Speech.speak(text, {
      language: 'it-IT',
      pitch: 1.0,
      rate: 0.85,
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return colors.danger;
      case 'high':
        return colors.warning;
      default:
        return colors.secondary;
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'CRITICO';
      case 'high':
        return 'ALTA';
      default:
        return 'NORMALE';
    }
  };

  const getSenderColor = (sender?: string) => {
    if (sender === 'DOS') return '#FF6B35';
    if (sender === 'CAN') return '#004E89';
    return colors.secondary;
  };

  const getSenderLabel = (sender?: string) => {
    if (sender === 'DOS') return 'DOS';
    if (sender === 'CAN') return 'CAN';
    return '';
  };

  const renderPhaseView = () => {
    return (
      <ScrollView
        style={styles.messagesScroll}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {communicationPhases.map((phase) => (
          <View key={phase.id} style={styles.phaseCard}>
            <Pressable
              style={styles.phaseHeader}
              onPress={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
            >
              <View style={styles.phaseHeaderContent}>
                <Text style={styles.phaseTitle}>{phase.title}</Text>
                <Text style={styles.phaseDescription}>{phase.description}</Text>
              </View>
              <IconSymbol
                name={selectedPhase === phase.id ? "chevron.up" : "chevron.down"}
                size={20}
                color={colors.text}
              />
            </Pressable>

            {selectedPhase === phase.id && (
              <View style={styles.phaseMessages}>
                {phase.messages.map((message, index) => (
                  <View key={message.id} style={styles.phaseMessageItem}>
                    <View style={styles.messageSequence}>
                      <Text style={styles.sequenceNumber}>{index + 1}</Text>
                    </View>
                    <View style={styles.messageContent}>
                      {message.phase && (
                        <Text style={styles.messagePhaseLabel}>{message.phase}</Text>
                      )}
                      <View style={styles.messageHeaderRow}>
                        {message.sender && (
                          <View
                            style={[
                              styles.senderBadge,
                              { backgroundColor: getSenderColor(message.sender) },
                            ]}
                          >
                            <Text style={styles.senderText}>
                              {getSenderLabel(message.sender)}
                            </Text>
                          </View>
                        )}
                        <Text style={styles.messageTitle}>{message.title}</Text>
                      </View>
                      <Text style={styles.messageText}>{message.message}</Text>
                      <View style={styles.messageActions}>
                        <Pressable
                          style={[styles.actionButton, styles.speakButton]}
                          onPress={() => handleSpeakMessage(message.message)}
                        >
                          <IconSymbol
                            name={isSpeaking ? "stop.circle.fill" : "speaker.wave.2.fill"}
                            size={18}
                            color="#FFFFFF"
                          />
                        </Pressable>
                        <Pressable
                          style={[styles.actionButton, styles.sendButton]}
                          onPress={() => handleSendMessage(message)}
                        >
                          <IconSymbol name="paperplane.fill" size={18} color="#FFFFFF" />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    );
  };

  const renderCategoryView = () => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {messageCategories.map((category) => (
            <Pressable
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category && styles.categoryChipTextActive,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView
          style={styles.messagesScroll}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {filteredMessages.map((message) => (
            <View key={message.id} style={styles.messageCard}>
              <View style={styles.messageHeader}>
                <View style={styles.messageTitleRow}>
                  <View style={styles.messageTitleContainer}>
                    {message.sender && (
                      <View
                        style={[
                          styles.senderBadge,
                          { backgroundColor: getSenderColor(message.sender) },
                        ]}
                      >
                        <Text style={styles.senderText}>
                          {getSenderLabel(message.sender)}
                        </Text>
                      </View>
                    )}
                    <Text style={styles.messageTitle}>{message.title}</Text>
                  </View>
                  <View
                    style={[
                      styles.priorityBadge,
                      { backgroundColor: getPriorityColor(message.priority) },
                    ]}
                  >
                    <Text style={styles.priorityText}>
                      {getPriorityLabel(message.priority)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.messageCategory}>{message.category}</Text>
                {message.phase && (
                  <Text style={styles.messagePhaseLabel}>{message.phase}</Text>
                )}
              </View>

              <Text style={styles.messageText}>{message.message}</Text>

              <View style={styles.messageActions}>
                <Pressable
                  style={[styles.actionButton, styles.speakButton]}
                  onPress={() => handleSpeakMessage(message.message)}
                >
                  <IconSymbol
                    name={isSpeaking ? "stop.circle.fill" : "speaker.wave.2.fill"}
                    size={20}
                    color="#FFFFFF"
                  />
                  <Text style={styles.actionButtonText}>Ascolta</Text>
                </Pressable>

                <Pressable
                  style={[styles.actionButton, styles.sendButton]}
                  onPress={() => handleSendMessage(message)}
                >
                  <IconSymbol name="paperplane.fill" size={20} color="#FFFFFF" />
                  <Text style={styles.actionButtonText}>Invia</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Comunicazioni Operative',
          headerBackTitle: 'Indietro',
          presentation: 'card',
        }}
      />
      <SafeAreaView style={commonStyles.container} edges={['bottom']}>
        <View style={styles.container}>
          <View style={styles.viewModeToggle}>
            <Pressable
              style={[
                styles.viewModeButton,
                viewMode === 'categories' && styles.viewModeButtonActive,
              ]}
              onPress={() => setViewMode('categories')}
            >
              <IconSymbol
                name="list.bullet"
                size={20}
                color={viewMode === 'categories' ? '#FFFFFF' : colors.text}
              />
              <Text
                style={[
                  styles.viewModeText,
                  viewMode === 'categories' && styles.viewModeTextActive,
                ]}
              >
                Categorie
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.viewModeButton,
                viewMode === 'phases' && styles.viewModeButtonActive,
              ]}
              onPress={() => setViewMode('phases')}
            >
              <IconSymbol
                name="list.number"
                size={20}
                color={viewMode === 'phases' ? '#FFFFFF' : colors.text}
              />
              <Text
                style={[
                  styles.viewModeText,
                  viewMode === 'phases' && styles.viewModeTextActive,
                ]}
              >
                Fasi Operative
              </Text>
            </Pressable>
          </View>

          {viewMode === 'phases' ? renderPhaseView() : renderCategoryView()}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewModeToggle: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '30',
  },
  viewModeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.card,
    marginHorizontal: 4,
  },
  viewModeButtonActive: {
    backgroundColor: colors.primary,
  },
  viewModeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 8,
  },
  viewModeTextActive: {
    color: '#FFFFFF',
  },
  categoriesScroll: {
    maxHeight: 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '30',
  },
  categoriesContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.textSecondary + '50',
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  messagesScroll: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  messageCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  messageHeader: {
    marginBottom: 12,
  },
  messageTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  messageTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  messageTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  senderBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 8,
  },
  senderText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  messageCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  messagePhaseLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 4,
  },
  messageText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 20,
    marginBottom: 16,
  },
  messageActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  speakButton: {
    backgroundColor: colors.secondary,
  },
  sendButton: {
    backgroundColor: colors.primary,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  phaseCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary + '15',
  },
  phaseHeaderContent: {
    flex: 1,
    marginRight: 12,
  },
  phaseTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  phaseDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 18,
  },
  phaseMessages: {
    padding: 12,
  },
  phaseMessageItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '20',
  },
  messageSequence: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  sequenceNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  messageContent: {
    flex: 1,
  },
  messageHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

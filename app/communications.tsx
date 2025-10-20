
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { operationalMessages, messageCategories, OperationalMessage } from '@/data/operationalMessages';
import { useCommunicationLog } from '@/hooks/useCommunicationLog';
import * as Speech from 'expo-speech';

export default function CommunicationsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Tutte');
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
                    <Text style={styles.messageTitle}>{message.title}</Text>
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
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  messageTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginRight: 8,
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
});

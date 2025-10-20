
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { safetyChecklist, ChecklistItem } from '@/data/safetyChecklist';
import { useCommunicationLog } from '@/hooks/useCommunicationLog';

export default function SafetyScreen() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'pre' | 'post' | 'log'>('pre');
  const { logs, clearLogs } = useCommunicationLog();

  const toggleCheckItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetChecklist = () => {
    Alert.alert(
      'Reset Check-list',
      'Vuoi resettare tutte le voci della check-list?',
      [
        { text: 'Annulla', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => setCheckedItems(new Set()),
        },
      ]
    );
  };

  const exportLogs = () => {
    if (logs.length === 0) {
      Alert.alert('Nessun Log', 'Non ci sono comunicazioni da esportare.');
      return;
    }
    Alert.alert(
      'Esporta Log',
      `Trovate ${logs.length} comunicazioni. Funzionalità di esportazione in sviluppo.`,
      [{ text: 'OK' }]
    );
  };

  const handleClearLogs = () => {
    Alert.alert(
      'Cancella Log',
      'Vuoi cancellare tutte le comunicazioni registrate?',
      [
        { text: 'Annulla', style: 'cancel' },
        {
          text: 'Cancella',
          style: 'destructive',
          onPress: clearLogs,
        },
      ]
    );
  };

  const renderChecklistItem = (item: ChecklistItem) => {
    const isChecked = checkedItems.has(item.id);
    return (
      <Pressable
        key={item.id}
        style={[styles.checklistItem, isChecked && styles.checklistItemChecked]}
        onPress={() => toggleCheckItem(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            isChecked && styles.checkboxChecked,
            item.critical && styles.checkboxCritical,
          ]}
        >
          {isChecked && (
            <IconSymbol name="checkmark" size={18} color="#FFFFFF" />
          )}
        </View>
        <View style={styles.checklistItemContent}>
          <Text style={[styles.checklistItemText, isChecked && styles.checklistItemTextChecked]}>
            {item.text}
          </Text>
          {item.critical && (
            <View style={styles.criticalBadge}>
              <Text style={styles.criticalBadgeText}>CRITICO</Text>
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  const renderLogEntry = (log: any, index: number) => {
    const priorityColor = log.priority === 'critical' ? colors.danger :
                         log.priority === 'high' ? colors.warning : colors.secondary;
    
    return (
      <View key={log.id} style={styles.logEntry}>
        <View style={styles.logHeader}>
          <View style={[styles.logPriorityDot, { backgroundColor: priorityColor }]} />
          <Text style={styles.logTimestamp}>
            {new Date(log.timestamp).toLocaleTimeString('it-IT')}
          </Text>
          <View style={[styles.logTypeBadge, { backgroundColor: log.type === 'sent' ? colors.primary : colors.secondary }]}>
            <Text style={styles.logTypeText}>
              {log.type === 'sent' ? 'INVIATO' : 'RICEVUTO'}
            </Text>
          </View>
        </View>
        <Text style={styles.logCategory}>{log.category}</Text>
        <Text style={styles.logMessage}>{log.message}</Text>
      </View>
    );
  };

  const preItems = safetyChecklist.filter(item => item.category === 'pre');
  const postItems = safetyChecklist.filter(item => item.category === 'post');

  const preProgress = (preItems.filter(item => checkedItems.has(item.id)).length / preItems.length) * 100;
  const postProgress = (postItems.filter(item => checkedItems.has(item.id)).length / postItems.length) * 100;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sicurezza',
          headerBackTitle: 'Indietro',
          presentation: 'card',
        }}
      />
      <SafeAreaView style={commonStyles.container} edges={['bottom']}>
        <View style={styles.container}>
          <View style={styles.tabBar}>
            <Pressable
              style={[styles.tab, activeTab === 'pre' && styles.tabActive]}
              onPress={() => setActiveTab('pre')}
            >
              <Text style={[styles.tabText, activeTab === 'pre' && styles.tabTextActive]}>
                Pre-Intervento
              </Text>
            </Pressable>
            <Pressable
              style={[styles.tab, activeTab === 'post' && styles.tabActive]}
              onPress={() => setActiveTab('post')}
            >
              <Text style={[styles.tabText, activeTab === 'post' && styles.tabTextActive]}>
                Post-Intervento
              </Text>
            </Pressable>
            <Pressable
              style={[styles.tab, activeTab === 'log' && styles.tabActive]}
              onPress={() => setActiveTab('log')}
            >
              <Text style={[styles.tabText, activeTab === 'log' && styles.tabTextActive]}>
                Registro
              </Text>
            </Pressable>
          </View>

          {activeTab !== 'log' ? (
            <>
              <View style={styles.progressContainer}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>
                    Completamento: {Math.round(activeTab === 'pre' ? preProgress : postProgress)}%
                  </Text>
                  <Pressable onPress={resetChecklist}>
                    <Text style={styles.resetButton}>Reset</Text>
                  </Pressable>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${activeTab === 'pre' ? preProgress : postProgress}%` },
                    ]}
                  />
                </View>
              </View>

              <ScrollView
                style={styles.checklistScroll}
                contentContainerStyle={styles.checklistContent}
                showsVerticalScrollIndicator={false}
              >
                {(activeTab === 'pre' ? preItems : postItems).map(renderChecklistItem)}
              </ScrollView>
            </>
          ) : (
            <>
              <View style={styles.logActions}>
                <Pressable style={styles.logActionButton} onPress={exportLogs}>
                  <IconSymbol name="square.and.arrow.up" size={20} color={colors.primary} />
                  <Text style={styles.logActionText}>Esporta</Text>
                </Pressable>
                <Pressable style={styles.logActionButton} onPress={handleClearLogs}>
                  <IconSymbol name="trash" size={20} color={colors.danger} />
                  <Text style={[styles.logActionText, { color: colors.danger }]}>Cancella</Text>
                </Pressable>
              </View>

              <ScrollView
                style={styles.logScroll}
                contentContainerStyle={styles.logContent}
                showsVerticalScrollIndicator={false}
              >
                {logs.length === 0 ? (
                  <View style={styles.emptyState}>
                    <IconSymbol name="tray" size={48} color={colors.textSecondary} />
                    <Text style={styles.emptyStateText}>Nessuna comunicazione registrata</Text>
                  </View>
                ) : (
                  logs.map(renderLogEntry)
                )}
              </ScrollView>
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '30',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.primary,
  },
  progressContainer: {
    padding: 20,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '30',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  resetButton: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.textSecondary + '30',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  checklistScroll: {
    flex: 1,
  },
  checklistContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  checklistItemChecked: {
    opacity: 0.6,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxCritical: {
    borderColor: colors.danger,
  },
  checklistItemContent: {
    flex: 1,
  },
  checklistItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
    lineHeight: 20,
  },
  checklistItemTextChecked: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  criticalBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
  },
  criticalBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  logActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '30',
  },
  logActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  logActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 6,
  },
  logScroll: {
    flex: 1,
  },
  logContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textSecondary,
    marginTop: 16,
  },
  logEntry: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  logHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logPriorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  logTimestamp: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  logTypeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  logTypeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  logCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textSecondary,
    marginBottom: 6,
  },
  logMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 20,
  },
});


import { useState, useCallback } from 'react';

export interface CommunicationLogEntry {
  id: string;
  timestamp: Date;
  type: 'sent' | 'received';
  message: string;
  priority: 'normal' | 'high' | 'critical';
  category: string;
}

export function useCommunicationLog() {
  const [logs, setLogs] = useState<CommunicationLogEntry[]>([]);

  const addLog = useCallback((
    message: string,
    type: 'sent' | 'received',
    priority: 'normal' | 'high' | 'critical',
    category: string
  ) => {
    const newLog: CommunicationLogEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      type,
      message,
      priority,
      category,
    };
    setLogs(prev => [newLog, ...prev]);
  }, []);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  const exportLogs = useCallback(() => {
    return logs.map(log => ({
      timestamp: log.timestamp.toISOString(),
      type: log.type,
      message: log.message,
      priority: log.priority,
      category: log.category,
    }));
  }, [logs]);

  return {
    logs,
    addLog,
    clearLogs,
    exportLogs,
  };
}

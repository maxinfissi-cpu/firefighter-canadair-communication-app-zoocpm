
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { useRouter } from "expo-router";
import { colors, commonStyles } from "@/styles/commonStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const modules = [
    {
      title: "Modulo COAU",
      description: "Alfabeto fonetico, traduttore e esercitazioni",
      icon: "text.bubble.fill",
      route: "/coau",
      color: colors.primary,
    },
    {
      title: "Comunicazioni Operative",
      description: "Messaggi standard DOS-Canadair",
      icon: "antenna.radiowaves.left.and.right",
      route: "/communications",
      color: colors.secondary,
    },
    {
      title: "Sicurezza",
      description: "Check-list e registro eventi",
      icon: "shield.fill",
      route: "/safety",
      color: colors.accent,
    },
    {
      title: "Formazione",
      description: "Quiz e esercitazioni COAU",
      icon: "book.fill",
      route: "/training",
      color: colors.success,
    },
  ];

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "AIB/VVF DOS-Canadair",
            headerLargeTitle: true,
          }}
        />
      )}
      <SafeAreaView style={[commonStyles.container]} edges={['top']}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={[
            styles.contentContainer,
            Platform.OS !== 'ios' && styles.contentContainerWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <IconSymbol name="flame.fill" size={48} color={colors.primary} />
            </View>
            <Text style={styles.headerTitle}>AIB/VVF</Text>
            <Text style={styles.headerSubtitle}>
              Sistema di Gestione Comunicazioni{'\n'}DOS - Canadair
            </Text>
          </View>

          <View style={styles.modulesContainer}>
            {modules.map((module, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  styles.moduleCard,
                  pressed && styles.moduleCardPressed,
                ]}
                onPress={() => router.push(module.route as any)}
              >
                <View style={[styles.moduleIcon, { backgroundColor: module.color }]}>
                  <IconSymbol name={module.icon as any} size={32} color="#FFFFFF" />
                </View>
                <View style={styles.moduleContent}>
                  <Text style={styles.moduleTitle}>{module.title}</Text>
                  <Text style={styles.moduleDescription}>{module.description}</Text>
                </View>
                <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
              </Pressable>
            ))}
          </View>

          <View style={styles.infoCard}>
            <IconSymbol name="info.circle.fill" size={24} color={colors.secondary} />
            <Text style={styles.infoText}>
              Applicazione per la gestione delle comunicazioni operative tra il Direttore delle 
              Operazioni di Spegnimento (DOS) e i Canadair durante le operazioni AIB.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  modulesContainer: {
    marginTop: 20,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  moduleCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  moduleIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  moduleContent: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 18,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 18,
    marginLeft: 12,
  },
});

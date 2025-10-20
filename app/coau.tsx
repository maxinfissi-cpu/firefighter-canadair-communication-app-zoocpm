
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { coauAlphabet, translateToCOAU } from '@/data/coauAlphabet';
import * as Speech from 'expo-speech';

export default function COAUScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleTranslate = (text: string) => {
    setInputText(text);
    if (text.trim()) {
      const translated = translateToCOAU(text);
      setTranslatedText(translated);
    } else {
      setTranslatedText('');
    }
  };

  const handleSpeak = async (text: string) => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    Speech.speak(text, {
      language: 'it-IT',
      pitch: 1.0,
      rate: 0.75,
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const speakPhonetic = (phonetic: string) => {
    handleSpeak(phonetic);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Modulo COAU',
          headerBackTitle: 'Indietro',
          presentation: 'card',
        }}
      />
      <SafeAreaView style={commonStyles.container} edges={['bottom']}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Traduttore COAU</Text>
            <Text style={styles.sectionDescription}>
              Digita una parola o frase per tradurla in alfabeto fonetico COAU
            </Text>
            
            <TextInput
              style={styles.input}
              placeholder="Inserisci testo..."
              placeholderTextColor={colors.textSecondary}
              value={inputText}
              onChangeText={handleTranslate}
              autoCapitalize="characters"
            />

            {translatedText ? (
              <View style={styles.translationCard}>
                <View style={styles.translationHeader}>
                  <Text style={styles.translationLabel}>Traduzione COAU:</Text>
                  <Pressable
                    style={styles.speakButton}
                    onPress={() => handleSpeak(translatedText)}
                  >
                    <IconSymbol 
                      name={isSpeaking ? "stop.circle.fill" : "speaker.wave.2.fill"} 
                      size={24} 
                      color={colors.primary} 
                    />
                  </Pressable>
                </View>
                <Text style={styles.translatedText}>{translatedText}</Text>
              </View>
            ) : null}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Alfabeto Fonetico COAU</Text>
            <Text style={styles.sectionDescription}>
              Tocca una lettera per ascoltare la pronuncia
            </Text>
            
            <View style={styles.alphabetGrid}>
              {coauAlphabet.map((item) => (
                <Pressable
                  key={item.letter}
                  style={({ pressed }) => [
                    styles.letterCard,
                    pressed && styles.letterCardPressed,
                  ]}
                  onPress={() => speakPhonetic(item.phonetic)}
                >
                  <Text style={styles.letter}>{item.letter}</Text>
                  <Text style={styles.phonetic}>{item.phonetic}</Text>
                  <Text style={styles.pronunciation}>{item.pronunciation}</Text>
                </Pressable>
              ))}
            </View>
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
    paddingVertical: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  input: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    borderWidth: 2,
    borderColor: colors.primary,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  translationCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    borderWidth: 2,
    borderColor: colors.accent,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  translationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  translationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  speakButton: {
    padding: 4,
  },
  translatedText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    lineHeight: 26,
  },
  alphabetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  letterCard: {
    width: '31%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  letterCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  letter: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 4,
  },
  phonetic: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  pronunciation: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

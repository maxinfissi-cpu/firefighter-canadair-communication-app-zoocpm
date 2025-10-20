
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { coauQuizQuestions, QuizQuestion } from '@/data/quizQuestions';

export default function TrainingScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = coauQuizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < coauQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(0);
    setQuizCompleted(false);
  };

  const getAnswerStyle = (index: number) => {
    if (!showExplanation) {
      return selectedAnswer === index ? styles.answerSelected : styles.answer;
    }
    
    if (index === currentQuestion.correctAnswer) {
      return styles.answerCorrect;
    }
    
    if (selectedAnswer === index && index !== currentQuestion.correctAnswer) {
      return styles.answerWrong;
    }
    
    return styles.answer;
  };

  if (quizCompleted) {
    const percentage = Math.round((score / coauQuizQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <>
        <Stack.Screen
          options={{
            title: 'Formazione',
            headerBackTitle: 'Indietro',
            presentation: 'card',
          }}
        />
        <SafeAreaView style={commonStyles.container} edges={['bottom']}>
          <View style={styles.container}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.resultsContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={[styles.resultCard, passed ? styles.resultCardPassed : styles.resultCardFailed]}>
                <IconSymbol
                  name={passed ? "checkmark.circle.fill" : "xmark.circle.fill"}
                  size={80}
                  color={passed ? colors.success : colors.danger}
                />
                <Text style={styles.resultTitle}>
                  {passed ? 'Quiz Completato!' : 'Riprova!'}
                </Text>
                <Text style={styles.resultScore}>
                  {score} / {coauQuizQuestions.length}
                </Text>
                <Text style={styles.resultPercentage}>{percentage}%</Text>
                <Text style={styles.resultMessage}>
                  {passed
                    ? 'Ottimo lavoro! Hai dimostrato una buona conoscenza dell\'alfabeto COAU.'
                    : 'Continua a esercitarti per migliorare la tua conoscenza dell\'alfabeto COAU.'}
                </Text>
              </View>

              <Pressable style={styles.restartButton} onPress={handleRestartQuiz}>
                <IconSymbol name="arrow.clockwise" size={20} color="#FFFFFF" />
                <Text style={styles.restartButtonText}>Ricomincia Quiz</Text>
              </Pressable>

              <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Suggerimenti per migliorare:</Text>
                <Text style={styles.infoText}>
                  - Esercitati regolarmente con il traduttore COAU{'\n'}
                  - Ascolta la pronuncia di ogni lettera{'\n'}
                  - Pratica la traduzione di parole comuni{'\n'}
                  - Ripeti il quiz fino a raggiungere il 100%
                </Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Formazione',
          headerBackTitle: 'Indietro',
          presentation: 'card',
        }}
      />
      <SafeAreaView style={commonStyles.container} edges={['bottom']}>
        <View style={styles.container}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>
              Domanda {currentQuestionIndex + 1} di {coauQuizQuestions.length}
            </Text>
            <Text style={styles.scoreText}>
              Punteggio: {score}/{answeredQuestions}
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${((currentQuestionIndex + 1) / coauQuizQuestions.length) * 100}%` },
              ]}
            />
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.quizContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.questionCard}>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            <View style={styles.answersContainer}>
              {currentQuestion.options.map((option, index) => (
                <Pressable
                  key={index}
                  style={getAnswerStyle(index)}
                  onPress={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <View style={styles.answerContent}>
                    <View style={styles.answerNumber}>
                      <Text style={styles.answerNumberText}>{String.fromCharCode(65 + index)}</Text>
                    </View>
                    <Text style={styles.answerText}>{option}</Text>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                    )}
                    {showExplanation && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                      <IconSymbol name="xmark.circle.fill" size={24} color={colors.danger} />
                    )}
                  </View>
                </Pressable>
              ))}
            </View>

            {showExplanation && (
              <View style={styles.explanationCard}>
                <View style={styles.explanationHeader}>
                  <IconSymbol name="lightbulb.fill" size={24} color={colors.accent} />
                  <Text style={styles.explanationTitle}>Spiegazione</Text>
                </View>
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
                
                <Pressable style={styles.nextButton} onPress={handleNextQuestion}>
                  <Text style={styles.nextButtonText}>
                    {currentQuestionIndex < coauQuizQuestions.length - 1 ? 'Prossima Domanda' : 'Vedi Risultati'}
                  </Text>
                  <IconSymbol name="arrow.right" size={20} color="#FFFFFF" />
                </Pressable>
              </View>
            )}
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
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.card,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: colors.textSecondary + '30',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  quizContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 26,
  },
  answersContainer: {
    marginBottom: 20,
  },
  answer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.textSecondary + '30',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  answerSelected: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  answerCorrect: {
    backgroundColor: colors.success + '20',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.success,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  answerWrong: {
    backgroundColor: colors.danger + '20',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.danger,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  answerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  answerNumberText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  answerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    lineHeight: 22,
  },
  explanationCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.accent,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 8,
  },
  explanationText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 22,
    marginBottom: 20,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 8,
  },
  resultsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  resultCard: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  resultCardPassed: {
    borderWidth: 3,
    borderColor: colors.success,
  },
  resultCardFailed: {
    borderWidth: 3,
    borderColor: colors.danger,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 4,
  },
  resultPercentage: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: 16,
  },
  resultMessage: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 22,
  },
  restartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 24,
    width: '100%',
  },
  restartButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  infoSection: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 22,
  },
});

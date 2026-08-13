import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { localNotificationService } from './LocalNotificationService';

export default function App() {
  useEffect(() => {
    // 1. ინიციალიზაცია (ნებართვის მოთხოვნა)
    localNotificationService.configure();

    // 2. ეგრევე გაშვება შეტყობინების, როგორც კი აპლიკაციაში შევა!
    localNotificationService.showInstantQuizNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>მოგესალმებით აპლიკაციაში!</Text>
    </View>
  );
}

const styles = StyleSheet.StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
});

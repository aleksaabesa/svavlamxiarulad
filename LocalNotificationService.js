import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

class LocalNotificationService {
  configure = () => {
    PushNotification.configure({
      // სთხოვს ნებართვას iOS-ზე
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    // Android-ისთვის არხის შექმნა (Notification Channel)
    PushNotification.createChannel(
      {
        channelId: 'quiz-channel',
        channelName: 'Quiz Notifications',
        importance: 4, // მაღალი პრიორიტეტი (ზემოდან ჩამოშლა)
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );
  };

  // 🔔 ფუნქცია, რომელიც შეტყობინებას ეგრევე აგდებს აპლიკაციაში შესვლისას
  showInstantQuizNotification = () => {
    PushNotification.localNotification({
      channelId: 'quiz-channel', // Android-ისთვის
      title: '🧠 დროა ქვიზი გააკეთო!',
      message: 'მოგესალმები! შედი ქვიზების განყოფილებაში და გამოსცადე შენი ცოდნა 🚀',
      playSound: true,
      soundName: 'default',
      priority: 'high',
    });
  };
}

export const localNotificationService = new LocalNotificationService();

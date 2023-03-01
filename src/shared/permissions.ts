import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import colors from "./colors";

export const getNotificationPermisssion = async () => {
  try {
    const { status, canAskAgain } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      if (!canAskAgain) {
        Alert.alert(
          "푸시 알림 동의",
          "이미 접근 권한을 거부했습니다. 설정에서 권한을 승인하거나 앱을 다시 설치하세요."
        );
      }
    }
    await Notifications.requestPermissionsAsync();
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: colors.primary,
      });
    }
  } catch {}
};

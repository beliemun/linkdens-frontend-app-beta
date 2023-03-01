import "expo-dev-client";
import { RootTab } from "@navigators";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@shared";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <RootTab />
    </NavigationContainer>
  );
}

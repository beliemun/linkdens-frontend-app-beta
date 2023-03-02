import * as Notifications from "expo-notifications";

const setNotificationHandler = (handler: Notifications.NotificationHandler) => {
  Notifications.setNotificationHandler(handler);
};

export const hideNofitications = () => {
  setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: false,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
};

export const showNofitications = () => {
  setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

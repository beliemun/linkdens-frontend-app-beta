import { ReservationType, tw } from "@shared";
import CalanderLocaleConfig from "@shared/calander";
import { useState } from "react";
import { ScrollView } from "react-native";
import { LocaleConfig } from "react-native-calendars";
import moment from "moment";
import "moment/locale/ko";
import { Confirmed, SelectDate, SelectTime, Waiting } from "./modules";

LocaleConfig.locales["ko"] = CalanderLocaleConfig;
LocaleConfig.defaultLocale = "ko";

moment.locale("ko");

const EditReservation = () => {
  const [state, setState] = useState<ReservationType>("SELECT_DATE");

  const renderScreens = (type: ReservationType) => {
    switch (type) {
      case "SELECT_DATE":
        return <SelectDate setState={setState} />;
      case "SELECT_TIME":
        return <SelectTime setState={setState} />;
      case "WAITING":
        return <Waiting setState={setState} />;
      case "CONFIRMED":
        return <Confirmed />;
      default:
        return null;
    }
  };
  return <ScrollView style={tw`p-4`}>{renderScreens(state)}</ScrollView>;
};

export default EditReservation;

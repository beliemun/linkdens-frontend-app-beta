import { BaseButton } from "@components";
import { colors, ReservationType, tw } from "@shared";
import moment from "moment";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

interface ISelectDate {
  setState: React.Dispatch<React.SetStateAction<ReservationType>>;
}

const SelectDate = ({ setState }: ISelectDate) => {
  const [reservatedDay, setReservatedDay] = useState("2023-03-17");
  const [selectedDay, setSelectedDay] = useState(moment().format("YYYY-MM-DD"));
  const [timestamp, setTimestamp] = useState(0);
  const [dates, setDates] = useState({});
  useEffect(() => {
    const dates = {
      [selectedDay]: { selected: true, color: colors.secondary },
      [reservatedDay]: {
        selected: Boolean(selectedDay === reservatedDay),
        marked: true,
        color: colors.secondary,
      },
    };
    setDates(dates);
  }, [selectedDay]);
  return (
    <View>
      <View>
        <Text style={tw`text-secondary text-center text-4 font-bold py-2`}>
          변경하려는 날짜를 선택해주세요.
        </Text>
        <Text style={tw`text-secondary text-center text-7 font-bold py-2`}>
          {moment(selectedDay).format("LL")}
        </Text>
      </View>
      <Calendar
        initialDate={"2023-03-01"}
        minDate={moment().format("YYYY-MM-DD")}
        maxDate={moment().add(45, "days").format("YYYY-MM-DD")}
        markingType={"dot"}
        markedDates={{ ...dates }}
        onDayPress={(day) => {
          setTimestamp(day.timestamp);
          setSelectedDay(day.dateString);
        }}
      />
      <BaseButton
        style={tw`mt-4`}
        title="날짜 선택 완료"
        onPress={() => setState("SELECT_TIME")}
      />
    </View>
  );
};

export default SelectDate;

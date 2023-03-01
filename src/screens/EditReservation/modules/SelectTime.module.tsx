import { BaseButton } from "@components";
import { AM, PM, ReservationType, tw } from "@shared";
import { useState } from "react";
import { Text, View } from "react-native";
import TimeItem from "./TimeItem.module";

interface ISelectDate {
  setState: React.Dispatch<React.SetStateAction<ReservationType>>;
}

const SelectTime = ({ setState }: ISelectDate) => {
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <View>
      <View>
        <Text style={tw`text-secondary text-center text-4 font-bold py-2`}>
          변경하려는 시간을 선택해주세요.
        </Text>
        {selectedTime !== "" ? (
          <Text style={tw`text-secondary text-center text-7 font-bold py-2`}>
            {`${
              Boolean(Number(selectedTime.slice(0, 2)) < 12) ? "오전" : "오후"
            } ${selectedTime}`}
          </Text>
        ) : null}
      </View>
      <View>
        <Text style={tw`font-bold text-4 text-black/50 px-2 py-1 mt-2`}>
          오전
        </Text>
        <View style={tw`flex-row flex-wrap justify-center`}>
          {AM.map((time, index) => (
            <TimeItem
              key={index}
              time={time}
              selectedTime={selectedTime}
              onPress={() => setSelectedTime(time)}
            />
          ))}
        </View>
        <Text style={tw`font-bold text-4 text-black/50 px-2 py-1 mt-2`}>
          오후
        </Text>
        <View style={tw`flex-row flex-wrap justify-center`}>
          {PM.map((time, index) => (
            <TimeItem
              key={index}
              time={time}
              selectedTime={selectedTime}
              onPress={() => setSelectedTime(time)}
            />
          ))}
        </View>
      </View>
      <BaseButton
        style={tw`mt-4`}
        title="시간 선택 완료"
        onPress={() => setState("WAITING")}
      />
    </View>
  );
};

export default SelectTime;

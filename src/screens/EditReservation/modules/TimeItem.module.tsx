import { tw } from "@shared";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

interface ITimeItem {
  time: string;
  selectedTime: string;
  onPress?: () => void;
  [key: string]: any;
}

const TimeItem = ({ time, selectedTime, onPress, ...rest }: ITimeItem) => {
  const disabled = Boolean(Number(time.slice(0, 2)) > 14);
  return (
    <View {...rest}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={tw.style(
          `${
            disabled
              ? "border-shadow bg-shadow/30"
              : "border-secondary/20 bg-secondary/10"
          }`,
          `w-[${Dimensions.get("window").width / 5}px]`,
          `col-center m-1 py-4 border rounded-lg`,
          selectedTime === time && "bg-secondary"
        )}
      >
        <Text
          style={tw.style(
            disabled && "text-black/30",
            selectedTime === time && "text-white font-bold"
          )}
        >
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeItem;

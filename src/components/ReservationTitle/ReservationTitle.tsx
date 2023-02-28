import { Icons, ReservationType, tw } from "@shared";
import { StyleProp, Text, View, ViewStyle } from "react-native";

interface IReservationTitle {
  style?: StyleProp<ViewStyle>;
  state: ReservationType;
  title: string;
  [key: string]: any;
}

const ReservationTitle = ({ state, title, ...rest }: IReservationTitle) => {
  return (
    <View {...rest}>
      <View style={tw`row-center`}>
        <Icons.CheckSolid
          style={tw`w-6 h-6 mr-1 ${
            state === "CONFIRMED" ? "text-secondary" : "text-error"
          }`}
        />
        <Text
          style={tw`text-4 font-bold text-center ${
            state === "CONFIRMED" ? "text-secondary" : "text-error"
          }`}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ReservationTitle;

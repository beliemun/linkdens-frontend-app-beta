import { Icons, ReservationType, tw } from "@shared";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface IReservationCard {
  hostipal: string;
  doctor: string;
  state: ReservationType;
  date: string;
  id: number;
  address: string;
  onPress?: () => void;
  [key: string]: any;
}

const ReservationCard = ({
  hostipal,
  doctor,
  state,
  date,
  id,
  address,
  onPress,
  ...rest
}: IReservationCard) => {
  const getStateText = (state: ReservationType) => {
    switch (state) {
      case "WAITING":
        return "예약 확인 중";
      case "CONFIRMED":
      case "FINISHED":
        return "예약 확정";
    }
  };
  return (
    <View {...rest}>
      <View style={tw`rounded-xl bg-white shadow-md shadow-primary`}>
        <View
          style={tw`flex-row justify-between items-center rounded-t-2.5 p-0 ${
            state === "WAITING" ? "bg-error" : "bg-secondary"
          }`}
        >
          <Text style={tw`text-white text-5 font-bold p-3`}>{hostipal}</Text>
          {state === "FINISHED" ? (
            <TouchableOpacity onPress={onPress} style={tw`row-center p-3`}>
              <Text style={tw`text-white text-lg font-bold`}>예약 변경</Text>
              <Icons.ChevronRight style={tw`w-5 h-5 text-white`} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={tw`p-4`}>
          <View style={tw`flex-row justify-between items-center`}>
            <View
              style={tw`px-4 py-2 rounded-full ${
                state === "WAITING" ? "bg-error" : "bg-secondary"
              }`}
            >
              <Text style={tw`text-white text-5 font-bold`}>D-7</Text>
            </View>
            <Text style={tw`text-black text-5 font-bold`}>No. {id}</Text>
          </View>
          <Text style={tw`text-black text-5 font-bold mt-4`}>
            {doctor} 원장님
          </Text>
          <Text style={tw`text-black mt-2`}>상태: {getStateText(state)}</Text>
          <Text style={tw`text-black mt-1`}>일정: {date}</Text>
        </View>
        <Image style={tw`w-full h-40`} source={require("assets/map.png")} />
        <View style={tw`p-3 flex-row items-center py-4`}>
          <Text>
            <Icons.PinSolid style={tw`w-5 h-5 text-secondary`} />
          </Text>
          <Text>{address}</Text>
          <TouchableOpacity style={tw`row-center px-2`}>
            <Text>
              <Icons.CopuOutline style={tw`w-4 h-4 text-secondary`} />
            </Text>
            <Text style={tw`text-secondary pl-0.5`}>복사</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReservationCard;

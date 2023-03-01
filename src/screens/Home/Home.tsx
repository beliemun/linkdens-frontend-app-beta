import { Header, RadialGraph, ReservationCard } from "@components";
import Separator from "@components/Separator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors, tw } from "@shared";
import { HomeStackParamList } from "@types";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  VictoryArea,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryPolarAxis,
  VictoryTheme,
} from "victory-native";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const handleChangeReservation = () => {
    navigation.push("EditReservation");
  };
  return (
    <ScrollView style={tw`flex-1 mt-[${top}px]`}>
      <Header style={tw``} />
      <Separator title="다음 진료 일정" style={tw`ml-4 mt-4`} />
      <ReservationCard
        style={tw`p-4`}
        hostipal="고르다치과의원 강남점"
        doctor="김민수"
        state={"FINISHED"}
        date="2. 24. 금, 오후 13:30"
        id={90374044}
        address="서울 강남구 강남대로 422 씨티빌딩 9층"
        onPress={handleChangeReservation}
      />
      <Separator title="종합 구강 상태" style={tw`ml-4 mt-4`} />
      <RadialGraph style={tw`px-4`} animation={false} />
    </ScrollView>
  );
};

export default Home;

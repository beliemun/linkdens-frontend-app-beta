import { Header, RadialGraph, ReservationCard, Separator } from "@components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { tw } from "@shared";
import { HomeStackParamList } from "@types";
import { ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>
        구강관리 필요수준: 1단계
      </Text>
      <RadialGraph style={tw`px-4`} animation={false} />
    </ScrollView>
  );
};

export default Home;

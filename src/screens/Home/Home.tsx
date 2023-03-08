import { Header, ReservationCard, Separator } from "@components";
import StackGraph from "@components/StackGraph/StackGraph";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { showNofitications, tw } from "@shared";
import { getNotificationPermisssion } from "@shared/permissions";
import { HomeStackParamList, RootTabParamList } from "@types";
import { useEffect } from "react";
import { Alert, ScrollView, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const rootNavigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();
  const handleChangeReservation = () => {
    Alert.alert("예약 변경", "예약을 변경하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "변경",
        onPress: () => {
          navigation.push("EditReservation");
        },
      },
    ]);
  };
  useEffect(() => {
    try {
      (async () => {
        showNofitications();
        await getNotificationPermisssion();
      })();
    } catch {}
  }, []);
  return (
    <ScrollView style={tw`flex-1 mt-[${top}px]`}>
      <Header />
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
      <Separator title="구강 관리도" style={tw`ml-4 mt-4`} />
      <StackGraph animation={false} />
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>구강관리 점수: 3</Text>
      <Text style={tw`text-4 text-secondary text-center font-bold mt-4`}>가까운 병원에서 3개월 내에 검진받으세요.</Text>
      <TouchableOpacity
        style={tw`px-6 py-3 bg-secondary rounded-full self-center my-4`}
        onPress={() => rootNavigation.navigate("ProfileStack")}
      >
        <Text style={tw`text-5 text-white`}>가까운 Qray 클리닉 찾기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

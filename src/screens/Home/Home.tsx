import { ReservationCard } from "@components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { tw } from "@shared";
import { HomeStackParamList } from "@types";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const handleChangeReservation = () => {
    navigation.push("EditReservation");
  };
  const data = [
    // 차트에 들어갈 data를 먼저 지정해주고!
    {
      type: "scatterpolar", // chart type
      r: [39, 28, 8, 7, 28, 39], // data
      theta: ["A", "B", "C", "D", "E", "A"], // data category
      fill: "toself", // fill option
      name: "Group A", // data group name
    },
  ];

  const layout = {
    // data를 꾸며주는 layout을 지정!
    polar: {
      radialaxis: {
        // 방사축이라는 의미인데 아래 그림에서 파란색으로 표시된 부분을 말한다!
        visible: true, // 방사축 display
        range: [0, 50], // 방사축의 시작값, 끝 값
      },
    },
  };
  return (
    <ScrollView style={tw`flex-1 mt-[${top}px]`}>
      <Image
        style={tw`w-full h-10 resize-contain`}
        source={require("assets/logo.png")}
      />
      <View style={tw`flex-1 p-4`}>
        <Text style={tw`text-lg font-bold text-dark/70 my-2`}>
          다음 진료 일정
        </Text>
        <ReservationCard
          hostipal="고르다치과의원 강남점"
          doctor="김민수"
          state={"FINISHED"}
          date="2. 24. 금, 오후 13:30"
          id={90374044}
          address="서울 강남구 강남대로 422 씨티빌딩 9층"
          onPress={handleChangeReservation}
        />
        <Text style={tw`text-lg font-bold text-dark/70 mt-6`}>
          나의 구강 상태
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

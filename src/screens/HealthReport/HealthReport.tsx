import { LineGraph, RadialGraph, Separator } from "@components";
import StackGraph from "@components/StackGraph/StackGraph";
import { tw } from "@shared";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MyRanking, RankingList } from "./modules";

const HealthReport = () => {
  return (
    <ScrollView>
      <View style={tw`flex-center mt-4`}>
        <Image style={tw`w-24 h-24 rounded-full`} source={require("assets/user.png")} />
        <Text style={tw`text-5 text-black font-bold mt-2`}>공유</Text>
        <Text style={tw`text-dark mt-1`}>최근 검사일: 1개월 전(2023-02-10)</Text>
      </View>
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>치주질환 위험도가 가장 높습니다.</Text>
      <Separator title="질병 위험도" style={tw`ml-4 mt-6 `} />
      <RadialGraph animation={true} />
      <Separator title="잔존치아 예측" style={tw`ml-4 mt-4`} />
      <LineGraph />

      <Separator title="구강 관리도" style={tw`ml-4 mt-4`} />
      <StackGraph animation={false} />
      <Separator title="주간 치아건강 점수 랭킹" style={tw`ml-4 my-4`} />
      <View style={tw`flex-center bg-secondary p-2 my-4`}>
        <Text style={tw`text-5 text-white font-bold`}>구강관리 점수: 65점</Text>
        <Text style={tw`text-white mt-1`}>남성 40대 상위, 상위 44%</Text>
      </View>
      <RankingList />
      <MyRanking />
    </ScrollView>
  );
};

export default HealthReport;

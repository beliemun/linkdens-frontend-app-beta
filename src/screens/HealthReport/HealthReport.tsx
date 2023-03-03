import { RadialGraph, Separator } from "@components";
import { tw } from "@shared";
import { View, Text, Image, ScrollView } from "react-native";
import { MyRanking, RankingList } from "./modules";

const HealthReport = () => {
  return (
    <ScrollView>
      <View style={tw`flex-center mt-4`}>
        <Image style={tw`w-24 h-24 rounded-full`} source={require("assets/user.png")} />
        <Text style={tw`text-5 text-black font-bold mt-2`}>공유</Text>
        <Text style={tw`text-dark mt-1`}>최근 검사일: 1개월 전(2023-02-10)</Text>
      </View>
      <View style={tw`flex-center bg-secondary p-2 mt-4`}>
        <Text style={tw`text-5 text-white font-bold`}>구강관리 점수: 65점</Text>
        <Text style={tw`text-white mt-1`}>남성 40대 상위, 상위 44%</Text>
      </View>
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>"치주질환을 위한 관리가 필요합니다"</Text>
      <RadialGraph style={tw`px-4`} animation={true} />
      <Separator title="주간 치아건강 점수 랭킹" style={tw`ml-4 my-4`} />
      <RankingList />
      <MyRanking />
    </ScrollView>
  );
};

export default HealthReport;

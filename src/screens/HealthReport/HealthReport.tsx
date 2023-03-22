import { BaseButton, LineGraph, RadialGraph, Separator } from "@components";
import StackGraph from "@components/StackGraph/StackGraph";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { tw } from "@shared";
import { HealthReportStackNavigationProp, HealthReportStackParamList } from "@types";
import { View, Text, Image, ScrollView } from "react-native";
import WebView from "react-native-webview";
import { MyRanking, RankingList } from "./modules";

const HealthReport = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HealthReportStackParamList>>();
  const handleShowViewer = () => navigation.push("Viewer");
  return (
    <ScrollView>
      <View style={tw`flex-center mt-4`}>
        <Image style={tw`w-24 h-24 rounded-full`} source={require("assets/user.png")} />
        <Text style={tw`text-5 text-black font-bold mt-2`}>공유</Text>
        <Text style={tw`text-dark mt-1`}>최근 검사일: 1개월 전(2023-02-10)</Text>
      </View>

      <Separator title="질병 위험도" style={tw`ml-4 mt-6 `} />
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>치주질환 위험도: 3</Text>
      <Text style={tw`text-4 text-secondary text-center font-bold mt-4 mx-4`}>
        {"가장 높은 질병 위험도는 치주질환 입니다.\n최근 진료 후 3개월 내 진료를 받으시기 바랍니다."}
      </Text>
      <RadialGraph animation={true} />

      <Separator title="잔존치아 예측" style={tw`ml-4 mt-4`} />
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>30년 후 예상되는 상실치아 11개</Text>
      <Text style={tw`text-4 text-secondary text-center font-bold mt-4 mx-4`}>
        {"현재 질병 위험도가 앞으로 지속될 경우,\n30년 후 예상되는 상실치아는 11개입니다."}
      </Text>
      <LineGraph />

      <Separator title="구강 관리도" style={tw`ml-4 mt-4`} />
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>구강 관리도: 2점</Text>
      <Text style={tw`text-4 text-secondary text-center font-bold mt-4 mx-4`}>
        {"4개월 후 치과 방문이 필요합니다.\n(최근 진료부터 17일 남음)"}
      </Text>
      <StackGraph animation={false} />

      <Separator title="나의 구강 상태" style={tw`ml-4 mt-4 `} />
      <Text style={tw`text-5 text-secondary text-center font-bold mt-4`}>3D 구강 상태</Text>
      <Text style={tw`text-4 text-secondary text-center font-bold mt-4 mx-4`}>
        {"3D 모델로 구강 상태를를 상세히 확인해보세요."}
      </Text>
      <View style={tw`mt-6 col-center rounded-full`} pointerEvents="none">
        <WebView
          style={tw`w-64 h-64 rounded-full`}
          source={{ uri: "http://3.106.72.162" }}
          originWhitelist={["*"]}
        />
      </View>
      <BaseButton onPress={handleShowViewer} style={tw`p-4 my-2`} title="3D로 나의 구강상태 보기" />

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

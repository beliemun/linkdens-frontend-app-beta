import { HeaderLeftButton } from "@components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HealthReport } from "@screens";
import Viewer from "@screens/Viewer";
import { HealthReportStackParamList } from "@types";

const Stacks = createNativeStackNavigator<HealthReportStackParamList>();

const HealthReportStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="HealthReport" component={HealthReport} options={{ title: "구강 건강 리포트" }} />
      <Stacks.Screen
        name="Viewer"
        component={Viewer}
        options={{ headerLeft: HeaderLeftButton, title: "3D 구강 상태 보기", animation: "fade" }}
      />
    </Stacks.Navigator>
  );
};

export default HealthReportStack;

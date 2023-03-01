import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HealthReport } from "@screens";
import { HealthReportStackParamList } from "@types";

const Stacks = createNativeStackNavigator<HealthReportStackParamList>();

const HealthReportStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen
        name="HealthReport"
        component={HealthReport}
        options={{ title: "구강 건강 리포트" }}
      />
    </Stacks.Navigator>
  );
};

export default HealthReportStack;

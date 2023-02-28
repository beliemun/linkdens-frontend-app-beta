import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HealthReport } from "@screens";
import { HealthReportStackParamList } from "@types";

const Stacks = createNativeStackNavigator<HealthReportStackParamList>();

const HealthReportStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="HealthReport" component={HealthReport} />
    </Stacks.Navigator>
  );
};

export default HealthReportStack;

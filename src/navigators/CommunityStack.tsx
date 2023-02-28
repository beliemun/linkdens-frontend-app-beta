import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Community } from "@screens";
import { CommunityStackParamList } from "@types";

const Stacks = createNativeStackNavigator<CommunityStackParamList>();

const CommunityStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="Community" component={Community} />
    </Stacks.Navigator>
  );
};

export default CommunityStack;

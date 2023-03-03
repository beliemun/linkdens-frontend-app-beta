import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Store } from "@screens";
import { StoreStackParamList } from "@types";

const Stacks = createNativeStackNavigator<StoreStackParamList>();

const StoreStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="Store" component={Store} options={{ title: "구강 관리 용품" }} />
    </Stacks.Navigator>
  );
};

export default StoreStack;

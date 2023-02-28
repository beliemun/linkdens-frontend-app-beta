import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Store } from "@screens";
import { StoreStackParamList } from "@types";

const Stacks = createNativeStackNavigator<StoreStackParamList>();

const StoreStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="Store" component={Store} />
    </Stacks.Navigator>
  );
};

export default StoreStack;

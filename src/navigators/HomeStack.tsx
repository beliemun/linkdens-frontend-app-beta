import { HeaderLeftButton } from "@components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditReservation, Home } from "@screens";
import { HomeStackParamList } from "@types";

const Stacks = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stacks.Screen
        name="EditReservation"
        component={EditReservation}
        options={{ headerLeft: HeaderLeftButton, title: "예약 변경" }}
      />
    </Stacks.Navigator>
  );
};

export default HomeStack;

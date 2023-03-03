import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "@screens";
import { ProfileStackParamList } from "@types";

const Stacks = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerShown: false }}>
      <Stacks.Screen name="Profile" component={Profile} />
    </Stacks.Navigator>
  );
};

export default ProfileStack;

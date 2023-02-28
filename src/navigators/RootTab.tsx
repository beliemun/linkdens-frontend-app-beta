import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "@shared/icons";
import { colors, tw } from "@shared";
import { RootStackParamList } from "@types";
import CommunityStack from "./CommunityStack";
import HealthReportStack from "./HealthReportStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import StoreStack from "./StoreStack";
import { View } from "react-native";

const Tabs = createBottomTabNavigator<RootStackParamList>();

const RootTab = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="HealthReportStack"
        component={HealthReportStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icons.ChartSolid width={24} height={24} color={colors.black} />
            ) : (
              <Icons.ChartOutline width={24} height={24} color={colors.black} />
            ),
        }}
      />
      <Tabs.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icons.UsersSolid width={24} height={24} color={colors.black} />
            ) : (
              <Icons.UsersOutline width={24} height={24} color={colors.black} />
            ),
        }}
      />
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icons.HomeSolid width={24} height={24} color={colors.black} />
            ) : (
              <Icons.HomeOutLine width={24} height={24} color={colors.black} />
            ),
        }}
      />
      <Tabs.Screen
        name="StoreStack"
        component={StoreStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icons.ShopSolid width={24} height={24} color={colors.black} />
            ) : (
              <Icons.ShopOutline width={24} height={24} color={colors.black} />
            ),
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tw``}>
              {focused ? (
                <Icons.ProfileSolid
                  width={24}
                  height={24}
                  color={colors.black}
                />
              ) : (
                <Icons.ProfileOutline
                  width={24}
                  height={24}
                  color={colors.black}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default RootTab;

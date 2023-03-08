import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  CommunityStackParamList,
  HealthReportStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
  StoreStackParamList,
} from "./shared";

export type RootTabParamList = {
  HealthReportStack: undefined;
  CommunityStack: undefined;
  HomeStack: undefined;
  StoreStack: undefined;
  ProfileStack: undefined;
};

export type HealthReportStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "HealthReportTab">,
  NativeStackNavigationProp<HealthReportStackParamList>
>;

export type CommunityStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "CommunityTab">,
  StackNavigationProp<CommunityStackParamList>
>;

export type HomeStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "HomeTab">,
  StackNavigationProp<HomeStackParamList>
>;

export type StoreStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "StoreTab">,
  StackNavigationProp<StoreStackParamList>
>;

export type ProfileStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "ProfileTab">,
  StackNavigationProp<ProfileStackParamList>
>;

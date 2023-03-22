import { CompositeNavigationProp } from "@react-navigation/native";
import { PostType } from "@shared/types";

export type HealthReportStackParamList = {
  HealthReport: undefined;
  Viewer: undefined;
};

export type CommunityStackParamList = {
  Community: undefined;
  Post: {
    type: PostType;
    index: number;
  };
};

export type HomeStackParamList = {
  Home: undefined;
  EditReservation: undefined;
};

export type StoreStackParamList = {
  Store: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

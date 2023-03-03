import { tw } from "@shared";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const Profile = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={tw`mt-[${top}px] flex-1`}>
      <WebView style={tw`flex-1`} source={{ uri: "http://map.aiobio.co.kr/" }} />
    </View>
  );
};

export default Profile;

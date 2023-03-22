import { tw } from "@shared";
import WebView from "react-native-webview";

const Viewer = () => {
  return <WebView style={tw`flex-1`} source={{ uri: "http://3.106.72.162" }} originWhitelist={["*"]} />;
};

export default Viewer;

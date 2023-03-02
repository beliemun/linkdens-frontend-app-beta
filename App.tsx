import "expo-dev-client";
import { RootTab } from "@navigators";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@shared";

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <RootTab />
    </NavigationContainer>
  );
}

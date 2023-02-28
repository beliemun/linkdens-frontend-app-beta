import { useNavigation } from "@react-navigation/native";
import { colors, Icons, tw } from "@shared";
import { TouchableOpacity } from "react-native";

const HeaderLeftButton = ({ canGoBack }: any) => {
  const navigation = useNavigation();
  return canGoBack ? (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icons.ChevronLeft style={tw`flex-1 text-black w-8 h-8`} />
    </TouchableOpacity>
  ) : null;
};

export default HeaderLeftButton;

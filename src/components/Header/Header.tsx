import { tw } from "@shared";
import { Image, View } from "react-native";

interface IHeader {
  [key: string]: any;
}

const Header = ({ ...rest }: IHeader) => {
  return (
    <View {...rest}>
      <View style={tw`pt-2`}>
        <Image style={tw`w-full h-10 resize-contain`} source={require("assets/logo.png")} />
      </View>
    </View>
  );
};

export default Header;

import { tw } from "@shared";
import { Text, TouchableOpacity, View } from "react-native";

interface IBaseButton {
  title: string;
  onPress?: () => void;
  [key: string]: any;
}

const BaseButton = ({ title, onPress, ...rest }: IBaseButton) => {
  return (
    <View {...rest}>
      <TouchableOpacity
        onPress={onPress}
        style={tw`p-4 bg-secondary rounded-full`}
      >
        <Text style={tw`text-center text-white text-lg font-bold`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BaseButton;

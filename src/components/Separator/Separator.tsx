import { tw } from "@shared";
import { Text, View } from "react-native";

interface ISeparator {
  title?: string;
  [key: string]: any;
}

const Separator = ({ title, ...rest }: ISeparator) => {
  return (
    <View {...rest}>
      <View style={tw`row-center`}>
        {title ? (
          <Text style={tw`text-lg font-bold text-dark mr-2`}>{title}</Text>
        ) : null}
        <View style={tw`flex-1 h-[1px] bg-shadow`} />
      </View>
    </View>
  );
};

export default Separator;

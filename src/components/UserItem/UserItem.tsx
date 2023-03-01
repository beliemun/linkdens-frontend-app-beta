import { tw } from "@shared";
import { Image, Text, View } from "react-native";

interface IUserItem {
  index: number;
  name: string;
  description: string;
  point: number;
  [key: string]: any;
}

const UserItem = ({ index, name, description, point, ...rest }: IUserItem) => {
  return (
    <View {...rest}>
      <View style={tw`flex-row items-center`}>
        <Image
          style={tw`w-12 h-12 border-2 border-shadow rounded-full`}
          source={require(`assets/noimage.jpeg`)}
        />
        <View style={tw`flex-1 mx-2`}>
          <Text style={tw`text-lg text-black font-bold`}>{`${
            index + 1
          }. ${name}`}</Text>
          <Text style={tw`text-dark mt-1`}>{description}</Text>
        </View>
        <View>
          <Text
            style={tw`text-secondary text-6 font-bold`}
          >{`${point}점`}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserItem;

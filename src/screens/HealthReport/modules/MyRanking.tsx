import { tw } from "@shared";
import { Image, Text, View } from "react-native";

const MyRanking = () => {
  return (
    <View style={tw`flex-row items-center px-4 py-2 bg-secondary`}>
      <Image
        style={tw`w-12 h-12 rounded-full`}
        source={require(`assets/user.png`)}
      />
      <View style={tw`flex-1 mx-2`}>
        <Text style={tw`text-lg text-white font-bold`}>공유</Text>
        <Text style={tw`text-white mt-1`}>40대 남성</Text>
      </View>
      <View>
        <Text style={tw`text-white text-6 font-bold`}>65점</Text>
      </View>
    </View>
  );
};

export default MyRanking;

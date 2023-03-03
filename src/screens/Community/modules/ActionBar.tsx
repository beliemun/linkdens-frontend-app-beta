import { Icons, tw } from "@shared";
import { Text, View } from "react-native";

interface IActionBar {
  likeCount: number;
  commentCount: number;
}

const ActionBar = ({ likeCount, commentCount }: IActionBar) => {
  return (
    <View style={tw`flex-row w-full justify-center mt-1.5`}>
      <View style={tw`row-center px-2 py-1 rounded-full border border-dark/50`}>
        <Icons.LikeOutline style={tw`w-4 h-4 text-error`} />
        <Text style={tw`text-sm text-error ml-1`}>{likeCount}</Text>
      </View>
      <View style={tw`row-center px-2 py-1 rounded-full border border-dark/50 ml-2`}>
        <Icons.ChatOutline style={tw`w-4 h-4 text-error`} />
        <Text style={tw`text-sm text-error ml-1`}>{commentCount}</Text>
      </View>
    </View>
  );
};

export default ActionBar;

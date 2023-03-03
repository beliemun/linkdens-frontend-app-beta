import { tw } from "@shared";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import ActionBar from "./ActionBar";

interface IPostItem {
  title: string;
  desciption: string;
  likeCount: number;
  commentCount: number;
  children: React.ReactNode;
  onPress?: () => void;
}

const PostItem = ({ title, desciption, likeCount, commentCount, children, onPress }: IPostItem) => {
  return (
    <TouchableOpacity style={tw`col-center w-50 m-1 mb-6`} onPress={onPress}>
      {children}
      <Text style={tw`font-bold mt-2 mb-1`} numberOfLines={1}>
        {title}
      </Text>
      <Text style={tw`text-xs text-dark px-2`} numberOfLines={2}>
        {desciption}
      </Text>
      <ActionBar likeCount={likeCount} commentCount={commentCount} />
    </TouchableOpacity>
  );
};

export default PostItem;

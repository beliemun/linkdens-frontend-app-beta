import { ImagesForThumnail, Separator } from "@components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PostItem } from "@screens/Community/modules";
import { Icons, posts, PostType, recommends, tw } from "@shared";
import { CommunityStackParamList } from "@types";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Comments } from "./modules";

interface IPost {
  title: string;
  desciption: string;
  likeCount: number;
  commentCount: number;
}

interface IParam {
  index: number;
  type: PostType;
}

const Post = () => {
  const navigation = useNavigation<NativeStackNavigationProp<CommunityStackParamList>>();
  const router = useRoute<RouteProp<CommunityStackParamList>>();
  const [param, setParam] = useState<IParam>();
  const [post, setPost] = useState<IPost | null>(null);
  useEffect(() => {
    if (router.params) {
      const { index, type } = router.params;
      setParam({ index, type });
      switch (type) {
        case "POST":
          setPost(posts[index]);
          break;
        case "RECOMMEND":
          setPost(recommends[index]);
          break;
      }
    }
  }, []);
  useEffect(() => {
    if (post) {
      navigation.setOptions({
        title: post.title.slice(0, 20) + "...",
      });
    }
  }, [post]);
  const onPress = (type: PostType, index: number) => navigation.push("Post", { type, index });
  return param ? (
    <View>
      <ScrollView contentContainerStyle={tw`pb-20`}>
        <View style={tw`justify-center items-center`}>
          <ImagesForThumnail type={param.type} index={param.index} size="FULL" />
          <Icons.PlaySolid style={tw`absolute w-20 h-20 text-white/70`} />
        </View>
        <View style={tw`p-4`}>
          <View style={tw`row-center`}>
            <Image style={tw`w-12 h-12 rounded-full border border-secondary/50`} source={require("assets/icon.png")} />
            <Text style={tw`flex-1 text-5 font-bold ml-2`}>{post?.title}</Text>
          </View>
          <Text style={tw`text-black/50 text-right mt-2`}>2023-03-08 등록</Text>
          <Text style={tw`text-lg mt-4`}>{post?.desciption}</Text>
          <View style={tw`flex-row w-full justify-center mt-4 mb-2`}>
            <TouchableOpacity style={tw`row-center px-4 py-2 rounded-full bg-error`}>
              <Icons.LikeOutline style={tw`w-6 h-6 text-white`} />
              <Text style={tw`text-lg text-white ml-1`}>{post?.likeCount}</Text>
            </TouchableOpacity>
            <View style={tw`row-center px-4 py-2 rounded-full border border-error ml-2`}>
              <Icons.ChatOutline style={tw`w-6 h-6 text-error`} />
              <Text style={tw`text-lg text-error ml-1`}>{post?.commentCount}</Text>
            </View>
          </View>
        </View>
        <Separator />
        <Comments />
        <Separator title="비슷한 콘텐츠" style={tw`ml-4 mt-8`} />
        <View style={tw`row-center flex-wrap`}>
          {recommends.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              desciption={post.desciption}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              onPress={() => onPress("POST", index)}
            >
              <ImagesForThumnail type="POST" index={index} size="HALF" />
            </PostItem>
          ))}
        </View>
      </ScrollView>
      <View style={tw`absolute bottom-0 bg-white row-center px-4 py-2 border-t border-b border-shadow `}>
        <Image style={tw`w-12 h-12 rounded-full border border-black/20`} source={require("assets/user.png")} />
        <TextInput style={tw`flex-1 w-full p-4 border border-black/20 rounded-full ml-2`} placeholder={"댓글 남기기"} />
      </View>
    </View>
  ) : null;
};

export default Post;

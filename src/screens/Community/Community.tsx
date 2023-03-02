import {Separator} from "@components";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Icons, tw} from "@shared";
import {posts, recommends} from "@shared/constants";
import {PostType} from "@shared/types";
import {CommunityStackParamList} from "@types";
import {Image, ScrollView, Text, View} from "react-native";
import {ActionBar, ImageMaker, PostItem} from "./modules";

const Community = () => {
  const navigation = useNavigation<NativeStackNavigationProp<CommunityStackParamList>>();
  const onPress = (type: PostType, index: number) => navigation.push("Post", {type, index});
  return (
    <ScrollView>
      <Text style={tw`text-5 text-white bg-secondary py-2 text-center font-bold mb-1`}>
        "치경부마모 관리를 위한 추천 콘텐츠"
      </Text>
      <View style={tw`row-center flex-wrap`}>
        {recommends.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            desciption={post.desciption}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            onPress={() => onPress("RECOMMEND", index)}
          >
            <ImageMaker type="RECOMMEND" index={index} />
          </PostItem>
        ))}
      </View>

      <Separator title="이번주 인기 콘텐츠" style={tw`ml-4 my-4`} />
      <View style={tw`flex-center`}>
        <Image style={tw`w-full h-60`} source={require("assets/c00.webp")} resizeMode={"cover"} />
        <View style={tw`absolute w-full h-full bg-black/30`} />
        <Icons.PlaySolid style={tw`absolute w-20 h-20 text-white/70`} />
      </View>

      <Separator title="알아두면 쓸모있는 구강관리 정보" style={tw`ml-4 mt-8`} />
      <View style={tw`row-center flex-wrap`}>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            desciption={post.desciption}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            onPress={() => onPress("POST", index)}
          >
            <ImageMaker type="POST" index={index} />
          </PostItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default Community;

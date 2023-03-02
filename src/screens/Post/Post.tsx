import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {users} from "@shared";
import {posts, recommends} from "@shared/constants";
import {PostType} from "@shared/types";
import {CommunityStackParamList} from "@types";
import {useEffect, useState} from "react";
import {Text, View} from "react-native";

interface IPost {
  title: string;
  desciption: string;
  likeCount: number;
  commentCount: number;
}

const Post = () => {
  const navigation = useNavigation<NativeStackNavigationProp<CommunityStackParamList>>();
  const router = useRoute<RouteProp<CommunityStackParamList>>();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    if (router.params) {
      const {index, type} = router.params;
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
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;

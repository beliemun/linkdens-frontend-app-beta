import { UserItem } from "@components";
import { tw, users } from "@shared";
import { View } from "react-native";

const RankingList = () => {
  return (
    <View style={tw`mb-1`}>
      {users.map((user, index) => (
        <UserItem
          style={tw`px-4 py-1`}
          key={index}
          index={index}
          name={user.name}
          description={user.description}
          point={user.point}
        />
      ))}
    </View>
  );
};

export default RankingList;

import { Separator } from "@components";
import { Icons, tw, products } from "@shared";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Product } from "./modules";

const Store = () => {
  return (
    <ScrollView>
      <Image style={tw`w-full h-70`} source={require("assets/p0.png")} resizeMode="cover" />
      <Text style={tw`text-lg text-secondary pt-4 text-center font-bold mb-1`}>"치주질환 개선을 위한 추천 상품"</Text>
      <Text style={tw`text-5 text-dark pt-2 text-center font-bold mb-1`}>아이오바이오 F1450 고불소 치약</Text>
      <Text style={tw`mx-4 text-lg text-dark my-2`}>
        효과적인 충치 예방을 위해 국내외 기준에 맞춘 불소 함유량 1450ppm의 불소치약입니다. 초기 충치의 회복 효과가
        뛰어나며, 치태제거, 치은염, 치주염을 예방합니다.
      </Text>
      <Separator title="이번 주 최저가 핫딜" style={tw`ml-4 mt-4`} />
      <FlatList
        data={products}
        horizontal
        renderItem={({ item, index }) => <Product style={tw`p-3`} index={index} {...item} />}
      />
    </ScrollView>
  );
};

export default Store;

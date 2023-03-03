import { tw } from "@shared";
import { Image } from "react-native";

interface IImagesForProduct {
  index: number;
}

const ImagesForProduct: React.FC<IImagesForProduct> = ({ index }) => {
  switch (index) {
    case 0:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p1.png")} resizeMode="cover" />;
    case 1:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p2.png")} resizeMode="cover" />;
    case 2:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p3.png")} resizeMode="cover" />;
    case 3:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p4.png")} resizeMode="cover" />;
    case 4:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p5.png")} resizeMode="cover" />;
    case 5:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p6.png")} resizeMode="cover" />;
    case 6:
      return <Image style={tw`w-40 h-40 rounded-lg`} source={require("assets/p7.png")} resizeMode="cover" />;
  }
  return <></>;
};

export default ImagesForProduct;

import {tw} from "@shared";
import {Image} from "react-native";

interface IImageMaker {
  type: "POST" | "RECOMMEND";
  index: number;
}

const ImageMaker: React.FC<IImageMaker> = ({type, index}) => {
  if (type === "POST") {
    switch (index) {
      case 0:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c03.webp")} />;
      case 1:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c04.webp")} />;
      case 2:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c05.webp")} />;
      case 3:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c06.webp")} />;
      case 4:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c07.webp")} />;
      case 5:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c08.webp")} />;
    }
  }
  if (type === "RECOMMEND") {
    switch (index) {
      case 0:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c01.webp")} />;
      case 1:
        return <Image style={tw`w-45 h-25 resize-contain rounded-3`} source={require("assets/c02.webp")} />;
    }
  }

  return <></>;
};

export default ImageMaker;

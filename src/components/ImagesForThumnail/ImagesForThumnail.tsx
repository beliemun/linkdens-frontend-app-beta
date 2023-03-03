import { tw } from "@shared";
import { Image } from "react-native";

interface IImagesForThumnail {
  size: "FULL" | "HALF";
  type: "POST" | "RECOMMEND";
  index: number;
}

const ImagesForThumnail: React.FC<IImagesForThumnail> = ({ size, type, index }) => {
  const style = size === "FULL" ? "w-full h-61" : "w-45 h-25 rounded-3";
  if (type === "POST") {
    switch (index) {
      case 0:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c03.webp")} />;
      case 1:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c04.webp")} />;
      case 2:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c05.webp")} />;
      case 3:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c06.webp")} />;
      case 4:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c07.webp")} />;
      case 5:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c08.webp")} />;
    }
  }
  if (type === "RECOMMEND") {
    switch (index) {
      case 0:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c01.webp")} />;
      case 1:
        return <Image style={tw`${style} resize-contain`} source={require("assets/c02.webp")} />;
    }
  }

  return <></>;
};

export default ImagesForThumnail;

import { ImagesForProduct } from "@components";
import { Icons, tw } from "@shared";
import { View, Text } from "react-native";

interface IProduct {
  index: number;
  name: string;
  rate: number;
  sales: number;
  origin: number;
  price: number;
  [key: string]: any;
}

const Product: React.FC<IProduct> = ({ index, name, rate, sales, origin, price, ...rest }) => {
  return (
    <View {...rest}>
      <View style={tw`w-40 col-center`}>
        <ImagesForProduct index={index} />
        <View style={tw`absolute bg-[#e74c3c] px-2 py-1 rounded-lg top-2 left-2 row-center`}>
          <Icons.ChevronDoubleDown style={tw`w-5 h-5 text-white`} />
          <Text style={tw`text-white font-bold text-sm`}>최저가</Text>
        </View>
        <Text style={tw`text-lg m-1 text-center`}>{name}</Text>
        <View style={tw`flex-row items-center mt-1`}>
          <Icons.StarSolid style={tw`w-4 h-4 text-[#f1c40f]`} />
          <Text style={tw`text-sm font-bold`}>{rate}</Text>
          <Text style={tw`ml-1 text-dark/50`}>{`(${sales})`}</Text>
        </View>
        <Text style={tw`text-dark/50 line-through my-1`}>{`${origin}원`}</Text>
        <Text style={tw`text-dark text-lg font-bold`}>
          <Text style={tw`text-[#e74c3c] font-bold text-5`}>{`-${(((origin - price) / origin) * 100).toFixed(
            0
          )}%`}</Text>
          {` ${price}원`}
        </Text>
      </View>
    </View>
  );
};

export default Product;

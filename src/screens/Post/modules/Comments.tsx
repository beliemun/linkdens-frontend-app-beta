import { tw } from "@shared";
import { Image, View, Text } from "react-native";

const Comments = () => {
  return (
    <View>
      <View style={tw`flex flex-row mt-4 mx-4`}>
        <Image style={tw`w-12 h-12 rounded-full border-2 border-shadow`} source={require("assets/noimage.jpeg")} />
        <View style={tw`flex-1 w-full ml-2`}>
          <Text style={tw`text-lg font-bold`}>Dante</Text>
          <Text style={tw`text-black/50 mt-1`}>10분 전</Text>
          <Text style={tw` mt-1 leading-5`}>
            진짜 참된 치과의사시다 이런 분이 티비에 나와서 좋은 영향력이 널리 퍼져야함 진짜 방송 잘하신듯 앞으로도 어느
            분야든지 이런분들이 더 많아졌음 좋겠어요
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row mt-4 mx-4`}>
        <Image style={tw`w-12 h-12 rounded-full border-2 border-shadow`} source={require("assets/noimage.jpeg")} />
        <View style={tw`flex-1 w-full ml-2`}>
          <Text style={tw`text-lg font-bold`}>Chistopher</Text>
          <Text style={tw`text-black/50 mt-1`}>45분 전</Text>
          <Text style={tw` mt-1 leading-5`}>
            너무 멋지세요 ㅠㅠㅠ 주변에 치과의사 지인들만 봐도 저러기 쉽지 않은건데... 존경스럽습니다!
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row mt-4 mx-4`}>
        <Image style={tw`w-12 h-12 rounded-full border-2 border-shadow`} source={require("assets/noimage.jpeg")} />
        <View style={tw`flex-1 w-full ml-2`}>
          <Text style={tw`text-lg font-bold`}>Chistopher</Text>
          <Text style={tw`text-black/50 mt-1`}>4시간 전</Text>
          <Text style={tw` mt-1 leading-5`}>
            미소를만드는 치과 여기서 몇년동안 교정치료랑 충치관리까지 다 받았는데 정말 부모님이 잔소리 하시듯 양치법에
            관리법까지 하나하나 자세히 알려주시고 책임감 있게 행동하셔서 정말 좋았습니다
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row mt-4 mx-4`}>
        <Image style={tw`w-12 h-12 rounded-full border-2 border-shadow`} source={require("assets/noimage.jpeg")} />
        <View style={tw`flex-1 w-full ml-2`}>
          <Text style={tw`text-lg font-bold`}>Jeffery</Text>
          <Text style={tw`text-black/50 mt-1`}>2일 전</Text>
          <Text style={tw` mt-1 leading-5`}>
            세상을 이롭게 하는 데에 관심을 가지는 정말 멋진 분...ㅜ 박창진 원장님 앞으로 좋은 일 오래오래 계속 하셔야
            하니까 특히 몸 관리 잘하시구 항상 건강하셔요!!!
          </Text>
        </View>
      </View>
      <View style={tw`flex flex-row mt-4 mx-4`}>
        <Image style={tw`w-12 h-12 rounded-full border-2 border-shadow`} source={require("assets/noimage.jpeg")} />
        <View style={tw`flex-1 w-full ml-2`}>
          <Text style={tw`text-lg font-bold`}>Austin</Text>
          <Text style={tw`text-black/50 mt-1`}>3일 전</Text>
          <Text style={tw` mt-1 leading-5`}>
            어머머머 생각도 건강하고 애너지도 밝아. 이런 공공재같은 의사선생님 정말 박수드려요. 사명감도 있으시고 재치도
            있으시고.. 이런 분이 승승장구하셔서 원하시는 바 꼭 다 이루셔야 한다고 생각합니다. 알려주신 양치법으로
            양치할게요!!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comments;

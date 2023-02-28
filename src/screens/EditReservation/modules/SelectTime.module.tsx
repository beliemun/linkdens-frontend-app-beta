import { BaseButton } from "@components";
import { ReservationType, tw } from "@shared";
import { Text, View } from "react-native";

interface ISelectDate {
  setState: React.Dispatch<React.SetStateAction<ReservationType>>;
}

const SelectTime = ({ setState }: ISelectDate) => {
  return (
    <View>
      <View>
        <Text style={tw`text-secondary text-center text-4 font-bold py-2`}>
          변경하려는 시간을 선택해주세요.
        </Text>
      </View>

      <BaseButton
        style={tw`mt-4`}
        title="시간 선택 완료"
        onPress={() => setState("WAITING")}
      />
    </View>
  );
};

export default SelectTime;

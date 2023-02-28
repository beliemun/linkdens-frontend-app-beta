import { ReservationCard, ReservationTitle } from "@components";
import { ReservationType, tw } from "@shared";
import { Button, View } from "react-native";

interface ISelectDate {
  setState: React.Dispatch<React.SetStateAction<ReservationType>>;
}

const Waiting = ({ setState }: ISelectDate) => {
  return (
    <View>
      <ReservationTitle
        style={tw`mt-1 mb-4`}
        state={"WAITING"}
        title="병원에서 변경된 예약을 확인하고 있습니다."
      />
      <ReservationCard
        hostipal="고르다치과의원 강남점"
        doctor="김민수"
        state={"WAITING"}
        date="2. 24. 금, 오후 13:30"
        id={90374044}
        address="서울 강남구 강남대로 422 씨티빌딩 9층"
      />
      <View style={tw`h-4`} />
      <Button onPress={() => setState("CONFIRMED")} title={"예약 확정"} />
    </View>
  );
};

export default Waiting;

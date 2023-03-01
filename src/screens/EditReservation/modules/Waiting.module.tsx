import { ReservationCard, ReservationTitle } from "@components";
import { fadeIn, ReservationType, scrollUp, tw } from "@shared";
import { useEffect, useRef, useState } from "react";
import { Animated, Button, View } from "react-native";
import * as Notifications from "expo-notifications";

interface ISelectDate {
  setState: React.Dispatch<React.SetStateAction<ReservationType>>;
}

const Waiting = ({ setState }: ISelectDate) => {
  const [_, setShowAnimation] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(-30)).current;
  useEffect(() => {
    setShowAnimation(true);
    Animated.parallel([fadeIn(opacity), scrollUp(scrollY)]).start();
  }, []);
  const handleConfirmReservation = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "고르다치과의원 강남점",
        body: "진료 예약이 변경되었습니다.",
      },
      trigger: {
        seconds: 1, //onPress가 클릭이 되면 60초 뒤에 알람이 발생합니다.
      },
    });
    setTimeout(() => {
      setState("CONFIRMED");
    }, 2000);
  };
  return (
    <Animated.View style={[{ opacity, transform: [{ translateY: scrollY }] }]}>
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
      {/* <Button onPress={() => setState("CONFIRMED")} title={"예약 확정"} /> */}
      <Button onPress={handleConfirmReservation} title={"예약 확정"} />
    </Animated.View>
  );
};

export default Waiting;

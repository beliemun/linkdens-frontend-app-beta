import { Animated } from "react-native";

export const fadeIn = (opacity: Animated.Value, index?: number) =>
  Animated.timing(opacity, {
    toValue: 1,
    duration: 500,
    delay: index ? index * 10 : 0,
    useNativeDriver: true,
  });

export const scrollUp = (scrollY: Animated.Value) =>
  Animated.spring(scrollY, {
    toValue: 0,
    bounciness: 20,
    useNativeDriver: true,
  });

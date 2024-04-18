import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";

function Loader() {
  const loader = useSelector((state) => state.loader);
  return (
    loader.isLoader && (
      <View className="absolute w-full h-full justify-center items-center flex-1 z-[99] bg-[#ffffffa3] top-0 left-0">
        <Image
          source={require("../_assets/images/loader.gif")}
          contentFit="contain"
          transition={1000}
          className={"h-[100px] w-full"}
        />
      </View>
    )
  );
}

export default Loader;

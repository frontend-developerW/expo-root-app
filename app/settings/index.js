import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-y-[10vw]">
      <Text className="text-white bg-red-700 p-[2vw] text-[4vw] rounded shadow-md shadow-slate-950">
        This is settings page
      </Text>
      <Link href={"/"}>Index</Link>

      <StatusBar style="auto" />
    </View>
  );
}

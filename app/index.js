import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateLoader, updateUsername } from "./_redux/actions/user";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const saveUsername = () => {
    dispatch(updateLoader({isLoader: true}));
  };
  return (
    <View className="flex-1 items-center justify-center gap-y-[10vw] bg-white">
      <Text className="text-white bg-purple-700 p-[2vw] text-[4vw] rounded shadow-md shadow-slate-950">
        This is {user.username} page
      </Text>
      <Button title="click" onPress={saveUsername} />
      <Link href={"/login"}>Login</Link>
      <StatusBar style="auto" />
    </View>
  );
}

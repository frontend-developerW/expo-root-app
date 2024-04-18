import { Navigator, Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./_redux/states/store";
import Loader from "./_components/Loader";
function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Loader />
        <View className="flex-1">
          <Navigator>
            <Slot />
          </Navigator>
        </View>
      </PersistGate>
    </Provider>
  );
}

export default RootLayout;

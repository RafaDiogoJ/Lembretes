import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListaLembretes from "./src/screens/ListaLembretes";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListaLembretes />
    </GestureHandlerRootView>
  );
}

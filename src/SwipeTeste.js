import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function SwipeTest() {
  const renderRightActions = () => (
    <View style={styles.actions}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Excluir</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.card}>
          <Text style={{ fontSize: 18 }}>Deslize para excluir</Text>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#eee",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  actions: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 8,
    marginVertical: 4,
  },
});

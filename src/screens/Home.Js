import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function Home() {
  const renderRightActions = () => (
    <View style={styles.deleteBox}>
      <Text style={styles.deleteText}>Excluir</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.card}>
          <Text style={styles.text}>Arraste para excluir</Text>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#eee',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 16,
    borderRadius: 8,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    margin: 16,
    borderRadius: 8,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
});

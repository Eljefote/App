import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hola hola hola</Text>
        <Text>Hola hola hola</Text>
      </View>
      <View style={styles.main}></View>
      <View style={styles.tabs}>
        <Text>Ingresos</Text>
        <Text>Home</Text>
        <Text>Gastos</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#7fffd4",
  },
  header: {
    flex: 1,
    backgroundColor: "#8b0000",
  },
  main: {
    flex: 7,
    backgroundColor: "#00008b",
  },
  tabs: {
    flex: 1,
    backgroundColor: "#ff69b4",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navtab: {
    color: "#0000ff",
    fontSize: 20,
  },
});

import { Button, View, TextInput, StyleSheet } from "react-native";
// import MyDrawer from "./drawerScreen";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Button, View, TextInput, StyleSheet } from "react-native";
// import MyDrawer from "./drawerScreen";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder="Your name..." />
      <Button title="Input" onPress={() => navigation.navigate("Drawer")} />
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

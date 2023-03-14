import { Button, View, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
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

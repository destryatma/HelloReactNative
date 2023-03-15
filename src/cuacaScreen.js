import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { API_KEY } from "@env";

export default function Cuaca() {
  const [lokasi, setLokasi] = useState("");
  const [objekCuaca, setObjekCuaca] = useState({});
  async function getCuaca() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${lokasi}&appid=${API_KEY}&units=metric`
    );
    const result = await response.json();
    setObjekCuaca(result);
  }
  return (
    <View>
      <TextInput
        onChangeText={(text) => {
          setLokasi(text);
        }}
        value={lokasi}
      ></TextInput>
      <Button title="add" onPress={() => getCuaca()}></Button>
      <Text>{objekCuaca["name"]}</Text>
      <Text>{objekCuaca["weather"][0]["main"]}</Text>
      <Text>{objekCuaca["main"]["temp"]} C</Text>
    </View>
  );
}

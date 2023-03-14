import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { API_KEY } from "@env";

export default function Cuaca() {
  const [lokasi, setLokasi] = useState("");
  const [mainWeather, setMainWeather] = useState("");
  async function getCuaca() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${lokasi}&appid=${API_KEY}`
    );
    const result = await response.json();
    setMainWeather(result["weather"][0]["main"]);
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
      <Text>{mainWeather}</Text>
    </View>
  );
}

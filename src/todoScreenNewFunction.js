import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

const styles = StyleSheet;

export default function MyList2() {
  const [newItem, setNewItem] = useState("");
  const [listOfItems, setListOfItem] = useState([]);

  function deleteItem(id) {
    const updatedList = listOfItems.filter((item) => item.id !== id);
    setListOfItem(updatedList);
  }

  function updateInput(key, value) {
    key === "newItem" ? setNewItem(value) : setListOfItem(value);
  }

  function addBiasa() {
    const newItemJSON = {
      id: 1 + Math.random(),
      value: newItem.slice(),
    };
    const list = listOfItems;
    list.push(newItemJSON);
    setListOfItem(list);
    setNewItem("");
  }

  function addItem() {
    newItem != "" ? addBiasa() : null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>To Do List</Text>
      </View>
      <View>
        <TextInput
          placeholder="  Type item here..."
          style={styles.inputBox}
          onChangeText={(text) => {
            setNewItem(text);
          }}
          value={newItem}
        ></TextInput>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "maroon",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
            onPress={() => addItem()}
          >
            <Text style={styles.buttontext}>Add</Text>
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView>
            {listOfItems.map((item) => {
              return (
                <View style={styles.listview}>
                  <Text style={styles.textstyle}> {item.value}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "maroon",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                    }}
                    onPress={() => deleteItem(item.id)}
                  >
                    <Text style={{ color: "white" }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

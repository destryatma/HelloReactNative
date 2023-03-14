import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native";

const styles = StyleSheet;

export default class MyList extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      listOfItems: [],
    };
  }
  deleteItem(id) {
    //get all the list items
    const list = this.state.listOfItems;
    //filter the list and create another list which is basically list - item to be deleted
    const updatedList = list.filter((item) => item.id !== id);
    //now set the state with updated list
    this.setState({
      listOfItems: updatedList,
    });
  }
  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value,
    });
  }
  addItem = () => {
    if (this.state.newItem != "") {
      // create a new item with unique id
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };

      // copy current list of items
      const list = this.state.listOfItems;

      // add the new item to the list
      list.push(newItemJSON);

      // update state with new list, reset the new item input
      this.setState({
        listOfItems: list,
        //listOfItems:[...this.state.listOfItems,list],
        newItem: "",
      });
    }
  };
  render() {
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
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}
          ></TextInput>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "maroon",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
              onPress={this.addItem}
            >
              <Text style={styles.buttontext}>Add</Text>
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
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
                      onPress={() => this.deleteItem(item.id)}
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
}

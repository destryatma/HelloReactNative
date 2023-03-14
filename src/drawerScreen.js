import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./homeScreen";
import ProfileScreen from "./profilScreen";
import myList from "./todoScreen";
import MyList2 from "./todoScreenNewFunction";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: "right" }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Todoapp" component={myList} />
      <Drawer.Screen name="Todoapp2" component={MyList2} />
    </Drawer.Navigator>
  );
}

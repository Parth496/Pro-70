import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              if(route.name==="Transaction")
              {
                else if(route.name==="Search"){}

                }
              }
            }
          })
          }
         tabBarOptions={{
            //activeTintColor:'blue',
          //  inactiveTintColor:'red',

         // }}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

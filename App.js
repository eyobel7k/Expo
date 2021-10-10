import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from './assets/eyob.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blue}>
        <Text>Header</Text>
      </View>
      <View style={styles.red}>
      
        <Image
          source={ logo }
          style={styles.logo}/>
       
          <Text>Eyobel Legese</Text> 
         
      </View>
      <View style={styles.purple}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  blue: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#00ffd0a3",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  red: {
    flex: 8,
    backgroundColor: "#9100ff4d",
    alignItems: "center",
    justifyContent: "center",
  },
  purple: {
    flex: 1,
    backgroundColor: "#00ffd0a3",
    alignItems: "center",
  },
  logo: {
    borderRadius: '4%',
    width: 159,
    height: 159
  },
});

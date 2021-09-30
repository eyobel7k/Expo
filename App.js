import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
     
      <View style={styles.blue}>
        <Text>Header</Text>
        
        
      </View>
      <View style={styles.red}>
        <Text>Expo project</Text>
        
        
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
    flexDirection:'column',
    backgroundColor: 'black',
    
    
  },
  blue: {
    flex: 1,
    flexDirection:'row',
    width:'100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "space-evenly",
    
   
    
  },
  red: {
    flex: 8,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purple: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center'
   
  },
 

});
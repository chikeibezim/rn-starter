import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
  	<View>
  		<Text style={styles.text}>HomeScreen</Text>
  		<Button 
  			title="Go to Components Demo" 
  			onPress={() => navigation.navigate("Components")}
  		/>
  		<Button 
  			title="Go to List Demo"
  			onPress={() => navigation.navigate("ListScreen")}
  		/>
  		<Button 
  			title="Go to Image Screen"
  			onPress={() => navigation.navigate("ImageScreen")}
  		/>
  		<Button 
  			title="Go to Counter Demo"
  			onPress={() => navigation.navigate("Counter")}
  		/>
  		<Button 
  			title="Go to Color"
  			onPress={() => navigation.navigate("Color")}
  		/>
  		<Button 
  			title="Go to Square Screen"
  			onPress={() => navigation.navigate("Square")}
  		/>
  		<Button 
  			title="Go to Text Screen"
  			onPress={() => navigation.navigate("Text")}
  		/>
  		<Button 
  			title="Go to Box Screen"
  			onPress={() => navigation.navigate("Box")}
  		/>
  	</View>
   )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function NewsScreen({route, navigation}){

  function handleHomePress(){
    navigation.navigate("Home")
  }
    function handleAboutPress(){
    navigation.navigate("About")
  }
  function handleSettingsPress(){
    navigation.navigate("Settings")
  }

  return(
    <View style={styles.screen}>
      <Text>SETTINGS SCREEN </Text>
      <Button
      title="GO TO THE HOME SCREEN"
      onPress={handleHomePress} color="#9DFFBD"
      />
      <Button
      title="GO TO THE ABOUT SCREEN"
      onPress={handleAboutPress} color="#9DFFBD"
      />
      <Button
      title="GO TO THE SETTINGS SCREEN"
      onPress={handleSettingsPress} color="#9DFFBD"
      />
    </View>
  )
}
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center"
    }

  });
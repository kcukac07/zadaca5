import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function HomeScreen({route, navigation}){

  function handleSettingsPress(){
    navigation.navigate("Settings")
  }
    function handleAboutPress(){
    navigation.navigate("About")
  }
  function handleNewsPress(){
    navigation.navigate("News")
  }

  return(
    <View style={styles.screen}>
      <Text>HOME SCREEN </Text>
      <Button
      title="GO TO THE SETTINGS SCREEN"
      onPress={handleSettingsPress} color="#9DFFBD"
      />
      <Button
      title="GO TO THE ABOUT SCREEN"
      onPress={handleAboutPress} color="#9DFFBD"
      />
      <Button
      title="GO TO THE NEWS SCREEN"
      onPress={handleNewsPress} color="#9DFFBD"
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


import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  AppLoading } from "expo";
import * as Font from 'expo-font';




export default async function App() {
 
  await Font.loadAsync({
    
    

  
    // Any string can be used as the fontFamily name. Here we use an object to provide more control
    'Montserrat-SemiBold': {
      uri: require('../assets/fonts/fonts/Montserrat-SemiBold.ttf'),
      fontDisplay: FontDisplay.FALLBACK,
    },
  });
  
  
  return (
    <View style={styles.container}>
    <View style={styles.responsiveBox}>
      <Text style={styles.welcomeAdoba}>Welcome Adoba</Text>
      </View>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.rect2StackRow}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.adoba}>
              Adoba you are currently{"\n"}on a 17 day streak!{"\n"}Keep going
              Adoba.
            </Text>
          </View>
          
          <Image
           source={{
          uri: 'https://i.imgur.com/ZRkAaSW.png',
        }}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.rect3}></View>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.calendar2Row}>
        <Text style={styles.calendar2}>Calendar</Text>
        <Text style={styles.notes}>Notes</Text>
      </View>
      <View style={styles.streaksRow}>
        <Text style={styles.streaks}>Streaks</Text>
        <Text style={styles.projects}>Projects</Text>
        <Text style={styles.tasks}>Tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeAdoba: {
    fontFamily: "roboto-regular",
    width: wp('30.5%'),
    height: hp('8.5%'),
    color: "#121212",
    fontSize: 25,
     marginTop:  hp('5%'),
     marginLeft: wp('5%')
  },
  rect: {
    width: 151,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  rect5: {
    width: 151,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginLeft: 31
  },
  rectRow: {
    height: 124,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 14,
    marginRight: 28
  },
  rect2: {
    left: 0,
    width: 104,
    height: 199,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    top: 0
  },
  adoba: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 8
  },
  image2: {
    top: 38,
    left: 0,
    width: 121,
    height: 161,
    position: "absolute"
  },
  rect2Stack: {
    width: 121,
    height: 199,
    marginTop: 1
  },
  rect3: {
    width: 104,
    height: 199,
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  rect4: {
    width: 104,
    height: 199,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 1
  },
  rect2StackRow: {
    height: 200,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 14,
    marginRight: 17
  },
  calendar2: {
    fontFamily: "roboto-regular",
    width: wp('16.5%'),
    height: hp('9%'),
    color: "#121212",
    fontSize: 15
  },
  notes: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 122
  },
  calendar2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: -398,
    marginLeft: 14,
    marginRight: 139
  },
  streaks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  projects: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 77
  },
  tasks: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginLeft: 58
  },
  streaksRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 159,
    marginLeft: 14,
    marginRight: 82
  }
});

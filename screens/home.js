import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image,ImageBackground,SafeAreaView,Platform,StatusBar } from "react-native";

const bgimg = require("../assets/bg_image.png")
const issicon = require("../assets/iss_icon.png")
const meteoricon = require("../assets/meteor_icon.png")
export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}/>
              <ImageBackground style={styles.backgroundImage} source={bgimg}>
                <View style={styles.titleBar}>
                  <Text style={styles.titleText}>ISS tracker</Text>
                </View>

                  <TouchableOpacity style={styles.routeCards} onPress={()=>{ this.props.navigation.navigate("Isslocation")}}>
                    <Image style={styles.iconImage} source={issicon}/>
                    <Text style={styles.routeText}>ISS location</Text>
                    <Text style={styles.knowMore}>{"Know more -->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.routeCards} onPress={()=>{ this.props.navigation.navigate("Meteoro")}}>
                    <Image style={styles.iconImage} source={meteoricon}/>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"Know more -->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                  </TouchableOpacity>
              </ImageBackground>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
    titleBar: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontWeight: "bold",
      fontSize: 40,
      color: "white",
    },
    routeCards: {
      flex: 0.25,
      justifyContent: "center",
      // alignItems:"center",
      alignSelf: "center",
      borderRadius: 30,
      backgroundColor: "white",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      width: 300,
    },
    routeText: {
      fontWeight: "bold",
      fontSize: 35,
      color: "black",
      marginTop: 75,
      paddingLeft: 30,
    },
    iconImage: {
      position: "absolute",
      height: 200,
      width: 200,
      resizeMode: "contain",
      right: 20,
      top: -80,
    },
    knowMore: {
      paddingLeft: 30,
      color: "red",
      fontSize: 15,
    },
    bgDigit: {
      position: "absolute",
      color: "rgba(183,183,183,0.5)",
      fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1,
    },
  });
  
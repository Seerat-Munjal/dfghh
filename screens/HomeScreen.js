import React,{Component} from "react";
import { View,TouchableOpacity,Text,StyleSheet,SafeAreaView,Platform,StatusBar} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return( <View style={styles.container}>
            <SafeAreaView style={styles.androidSafeArea}/> 
            <View style={styles.titleBar}>
                 
            
            <Text style = {styles.titleText}> 
                ISS Tracker App
            </Text></View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  ISS Location
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                 Meteors
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                 Updates
                </Text>
            </TouchableOpacity>
        </View>)
    }

}
const styles = StyleSheet.create({
    titleText:{
        fontWeight:"bold",
        fontSize: 40,
        color  : "white"
    },
    androidSafeArea:{
        marginTop:Platform.OS==="android"?
        StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        flex:1
    },
    button:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:25,
        backgroundColor:"white"
    },
    buttonText:{
    fontSize:30,
    fontWeight:"bold",
    color:"black",
    marginTop:75,
    paddingLeft:30
    },

});

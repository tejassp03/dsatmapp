import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Dimensions } from "react-native-web";
/* import {ImageBackground,ScrollView} from 'react-native-reanimated';*/
import { images, SIZES, icons,FONTS } from "../constants";

const HomeScreen = ({ navigation }) => {
  function renderheader() {
    return (
      <View style={{ width: "100%", height: 200, backgroundColor: "" }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{ flex: 1, alignItems: "center" }}
        >
          <View
            style={{
              position: "absolute",
              top: 50,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("Pressed")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{
                  flex: 1,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              top: 50,
              width: "100%",
              alignItems: "flex-start",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("Pressed")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{
                  flex: 1,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              top: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.dsatmlogo}
              resizeMode="contain"
              style={{ width: 250 }}
            ></Image>
          </View>

          <View style={styles.card}>

          <Image source={require('../assets/images/tejas.jpg')}
              resizeMode="contain"
              style={{ width: 80,height: 80 ,borderRadius:100,margin:5}}
              >

          </Image>
          <View style={{marginLeft:10}}>
            <View style={styles.samerow}>
          <Text style={styles.cardtext}>Tejas SP</Text>
          <Text style={{fontSize: 16,fontWeight: "bold",color: "#A8A2A2",marginRight:10}}>BE-CS</Text>
          <Text style={{fontSize: 12,fontWeight: "bold",padding:2,color: "white",backgroundColor:"#799F65"}}>Active</Text>
          </View>
          <View style={styles.samerow}>
          <Text style={{fontSize: 16,fontWeight: "bold",color: "#5C5858",marginRight:10}}>1DT20CS160</Text>
          <Text style={{fontSize: 16,fontWeight: "bold",color: "#A8A2A2"}}>Semester-3</Text>
          </View>
          <View style={{marginTop:10,justifyContent: "center",alignItems: "center"}}>
          <TouchableOpacity style={{
              height:45,
              width:'100%',
              alignItems:'center',
              justifyContent: 'center',
              borderRadius:SIZES.radius,
              backgroundColor:'#1979B2',
          }} 
          >
                <Text style={{fontSize: 18,fontWeight: "bold",color:'white'}}>View Profile</Text>
          </TouchableOpacity>
          </View>   
          </View>          
          </View>
        </ImageBackground>
       
      </View>
      
    );
  }
  function renderNotification(){
      return (
        <View style={{
          flexDirection: "column",
          paddingHorizontal: 20,
          width: "100%",

      }}>
        <View style={{width: "50%"}}>
              <Text style={{fontSize:22, marginTop: -20}}>Notifications
              </Text>
        </View>
        <View style={styles.listTab}>
          <TouchableOpacity onPress={() => console.log("Pressed")} style={styles.btnTab}>
            <Text>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Pressed")} style={styles.btnTab}>
            <Text>Circular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Pressed")} style={styles.btnTab}>
            <Text>LMSNotification</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 100 }}>{renderheader()}</View>
      <View style={{ flex: 1, paddingBottom: 100 }}>{renderNotification()}</View>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
    card: {
        position: "absolute",
        bottom:'-30%',
        backgroundColor:'white',
        padding:20,
        flexDirection: 'row',
        borderRadius:15,
        shadowRadius:5,shadowColor: 'black',       
    },
    samerow:{
    flexDirection: 'row',
    marginBottom:5,
    alignItems:'center',
    },
    cardtext: {
      color:'#5C5858',
      fontSize: 20,
      fontWeight: "bold",
      marginRight:10
    },
    btnTab: {
      width: 90,
      borderWidth: .5,
      marginLeft: 10,borderRadius: 5,
      marginTop: 10,
      flexDirection: "row",
    },
    listTab: {
      backgroundColor:'white',
      borderRadius:15,
      height:200,
    },
   
  });
  
export default HomeScreen;

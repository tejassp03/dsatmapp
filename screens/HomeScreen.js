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
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 100 }}>{renderheader()}</View>
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
    }
  });
  
export default HomeScreen;

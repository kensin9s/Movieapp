import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../srcLoginn/stylesLogin"
import Logo from '../srcLoginn/svgLoginn/Logo.svg';
const Login = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd02AFJ-4pjnMKRMT-TIoiKOuyhtZkdwSPgg&usqp=CAU" };
  const [isSecureText, setSecureText] = React.useState(true);


  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.logo} />

     
      <View >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nhập tên Film bạn cần tìm"
        />
      </View>
  
      <TouchableOpacity style={styles.login1} >
        <View style={{marginTop:16,marginLeft:128,marginRight:128,marginBottom:16,}}>
        <Text style={{fontSize:14,lineHeight:19.07,alignSelf:'center',color:'white',}} >Tìm kiếm</Text>
        </View>
      
      </TouchableOpacity>


    </SafeAreaView>

  );
};


export default Login;
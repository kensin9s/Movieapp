import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text,ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from "./styleProfile";
const OTPP = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
     <Text style={styles.TextD}>XÁC MINH SỐ ĐIỆN THOẠI CỦA BẠN.</Text>
     <Text style={styles.TextD1}>
     Nhập mã OTP chúng tôi vừa gửi qua tin nhắn của bạn
     </Text>
      <OTPInputView style={{width: 328, height: 40, alignSelf:'center',marginBottom:20,marginTop:30,}}
          pinCount={6}
          //autoFocusOnLoad
          codeInputFieldStyle={styles.underD}
          codeInputHighlightStyle={styles.underonclickD}
        />
        <View style={{flexDirection:'row',alignSelf:'center',}}>
            <Text style={styles.TextD2}>
               Chưa Gửi được mã? 
            </Text>
        <TouchableOpacity >
      <Text style={styles.TextD3}>Gửi lại</Text>
      </TouchableOpacity>
        </View>
      <TouchableOpacity style={styles.loginD} onPress = { () => {navigate('Profile1')}}>
      <Text style={styles.loginD1}>Xác nhận</Text>
      </TouchableOpacity>
    
     
      
    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//     TextD: {
//         fontSize: 30,
//         marginTop: 100,
//         marginLeft:16,
//         fontWeight: 'bold',
//         color:'#212529',
//     },
//     TextD2: {
//         fontSize: 14,
//         marginLeft:16,
//         fontWeight: 'bold',
//     },
//     TextD3: {
//         fontSize: 14,
//         alignSelf: 'center',
//         fontWeight: 'bold',
//         color:'#60B939',
//     },
//     TextD1: {
//         fontSize: 14,
//         marginTop: 20,
//         alignSelf: 'center',
//         fontWeight: 'bold',
//     },

//     loginD: {
//       marginTop:30,
//         backgroundColor: '#60B939',
//       width:328,
//       height:50,
//       alignSelf:'center',
//       borderRadius:10,
//     },
//     loginD1: {
//       color: 'white',
//       fontSize:14,
//       alignSelf:'center',
//       marginTop:12,
//   },

//   underD: {
//     width: 41,
//     height: 40,
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     color:'black',
//     borderColor:'black'

//   },

//   underonclickD: {
//     borderColor: "red",
//   },
// });

export default OTPP;
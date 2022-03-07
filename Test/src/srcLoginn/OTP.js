import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./stylesLogin"
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Logo from '../srcLoginn/svgLoginn/Logo.svg';
const Login = () => {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);


  return (
    <SafeAreaView>
      <Logo style={styles.image2} />

     <Text style={{fontSize:14,lineHeight:19.07,alignSelf:'center',fontWeight:'bold',color:'#212529',marginBottom:18,}}>
       Nhạp mã OTP để xác nhận
     </Text>
     <View style={{width:327, height:38,alignSelf:'center',marginBottom:18,}}>
     <Text style={{alignSelf:'center',fontSize:14,}}>
     Mã OTP sẽ được gửi đến số điện thoại
     </Text>
     <Text style={{alignSelf:'center',fontSize:14,}}>đăng ký của bạn trong vài giây</Text>

     </View>
     
      <View  style={{width: 118, height: 29, alignSelf:'center',}} >
      <OTPInputView
          pinCount={6}
          //autoFocusOnLoad
          codeInputFieldStyle={styles.under}
          codeInputHighlightStyle={styles.underonclick}
        />
      </View>
      <View style={{marginTop:20,}}>
      <TouchableOpacity >
      <Text style={{color:'#376AED',alignSelf:'center',fontSize:14,}}>Gửi lại mã OTP</Text>
      </TouchableOpacity>
      </View>

  
      <TouchableOpacity style={styles.login1} onPress = { () => {navigate('Resetpassword')}} >
        <View style={{marginTop:16,marginLeft:128,marginRight:128,marginBottom:16,}}>
        <Text style={{fontSize:14,lineHeight:19.07,alignSelf:'center',color:'white',}} >Xác nhận</Text>
        </View>
      
      </TouchableOpacity>


    </SafeAreaView>

  );
};


export default Login;
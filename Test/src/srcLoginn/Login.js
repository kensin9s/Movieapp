import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./stylesLogin"
import Eye from '../srcLoginn/svgLoginn/Eye.svg';
import SlashEye from '../srcLoginn/svgLoginn/slashEye.svg';
import Logo from '../srcLoginn/svgLoginn/Music.jpg';
const Login = () => {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd02AFJ-4pjnMKRMT-TIoiKOuyhtZkdwSPgg&usqp=CAU" };
  const [isSecureText, setSecureText] = React.useState(true);


  return (
    <SafeAreaView>
       <Image source={image} resizeMode="center" style={styles.logo} />
      {/* <Logo resizeMode="center" style={styles.image}/> */}

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View style={styles.input}>
        <TextInput style={styles.input} onChangeText={onChangeText1} value={text1} secureTextEntry={isSecureText} placeholder="Mật khẩu"/>
            <TouchableOpacity 
              style={styles.hiddenPassword} onPress={() => { setSecureText(!isSecureText) }}>
              {!isSecureText ?
                <SlashEye style={styles.Eye} />
                : <Eye style={styles.Eye} />}
            </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginLeft: 242, marginRight: 16, }} onPress={() => { navigate('Forgotpassword') }} >
        <Text style={styles.baseText}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login}  onPress={() => { navigate('tab') }}>
        <View style={{ marginTop: 16, marginLeft: 128, marginRight: 128, marginBottom: 16, }}>
          <Text style={{ fontSize: 14, lineHeight: 19.07, alignSelf: 'center', color: 'white', }} >Đăng nhập</Text>
        </View>

      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 31, marginBottom: 43, }}>
        <Text style={{ fontSize: 14, }}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => { navigate('Register') }} >
          <Text style={styles.dangki}>Đăng kí</Text>
        </TouchableOpacity>

      </View >
      <View style={{ marginLeft: 107, marginRight: 107 }}>
        <Text style={styles.Text}>- Hoặc đăng nhập với -</Text>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 132, marginRight: 132, alignSelf: 'center', }}>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 24, }}>
          <Image
            style={styles.facebook}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
            }}
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};


export default Login;
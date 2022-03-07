import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./stylesLogin"
import Eye from '../srcLoginn/svgLoginn/Eye.svg';
import SlashEye from '../srcLoginn/svgLoginn/slashEye.svg';
import Logo from '../srcLoginn/svgLoginn/Logo.svg';
const Login = () => {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);


  return (
    <SafeAreaView>
      <Logo resizeMode="center" style={styles.image} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Họ và tên"
      />
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
      <TouchableOpacity style={styles.login} onPress={() => { navigate('Login') }} >
        <View style={{ marginTop: 16, marginLeft: 128, marginRight: 128, marginBottom: 16, }}>
          <Text style={{ fontSize: 14, lineHeight: 19.07, alignSelf: 'center', color: 'white', }} >Đăng kí</Text>
        </View>

      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 31, marginBottom: 30, }}>
        <Text style={{ fontSize: 14, }}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => { navigate('Login') }} >
          <Text style={styles.dangki}>Đăng nhập</Text>
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
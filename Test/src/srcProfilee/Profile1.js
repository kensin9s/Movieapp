import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styleProfile";
const image6 = { uri: "https://pic.onlinewebfonts.com/svg/img_402021.png" };
const Login = () => {
    const [text, onChangeText] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const b1 = { uri: "https://massageishealthy.com/wp-content/uploads/2018/12/avartar-massage-healthy-cu.png" };
    const [isSecureText, setSecureText] = React.useState(true);
    const { navigate } = useNavigation();
    return (
        <SafeAreaView>
            <Text style={{ color: '#376AED',marginLeft:30,fontSize:12, }}>Tên của bạn*</Text>
            <TextInput
                style={styles.inputB}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nhập tên của bạn "
            />
            <Text style={styles.textB}>Ngày sinh</Text>
            <TextInput
                style={styles.inputB}
                onChangeText={onChangeNumber}
                keyboardType="numeric"
                value={number}
                placeholder="ddd/mmm/yyy"
            />
            <Text style={styles.textB}>Số điện thoại</Text>
            
            <View style={styles.inputB}>
            <TextInput
               
                onChangeText={onChangeNumber1}
                value={number1}
                keyboardType="numeric"
                placeholder="Xác Minh"
            />
                <TouchableOpacity
                style={{ position: 'absolute', right: 17, bottom: 15, }}  onPress = { () => {navigate('Verifyphonenumber')}}>
                    <Image source={b1} style={styles.b1} />
                </TouchableOpacity>
            </View>
            <Text style={styles.textB}>Email</Text>
            <TextInput
                style={styles.inputB}
                onChangeText={onChangeText1}
                value={text1}
                placeholder="Xác Minh"
            />

            <TouchableOpacity style={styles.loginB}  onPress = { () => {navigate('verificationEmail')}} >
                <Text style={{color:'white',alignSelf:'center',}}>Hoàn Thành</Text>
            </TouchableOpacity>


        </SafeAreaView>

    );
};

// const styles = StyleSheet.create({
//     inputB: {
//         width:328,
//         height: 50,
//         marginTop:10,
//         marginBottom:20,
//         borderRadius: 10,
//         borderWidth:1,
//         alignSelf:'center',
//     },
    
//     loginB: {
//         backgroundColor: '#60B939',
//         color: 'white',
//         padding: 16,
//         borderRadius: 10,
//         width:328,
//         height:50,
//         marginTop: 10,
//         alignSelf:'center',
//         fontSize: 14,
//     },
//     b1: {
//         height: 21,
//         width: 21,
//     },
//     textB:{ color: '#212529', marginLeft:30,fontSize:12,},

// });

export default Login;
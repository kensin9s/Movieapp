import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styleProfile";
const Login = () => {
    const { navigate } = useNavigation();
    const [text, onChangeText] = React.useState("Nguyenvanthanh121100@gmail.com");
    return (
        <SafeAreaView>
            <Text style={styles.TextE}>XÁC MINH THƯ ĐIỆN TỬ CỦA BẠN .</Text>
            <Text style={styles.TextE1}>
                Để tăng tính xác thực cho tài khoản, chúng tôi khuyên bạn nên nhập chính xác Email của mình.
            </Text>
            <TextInput
                style={styles.inputE1}
                onChangeText={onChangeText}
                value={text}
                maxLength={50}
                placeholder="Nhập Số E-mail để xác thực"
            />
         <View style={{flexDirection:'row',alignSelf:'center',}}>
             <Text style={{alignSelf:'center',fontSize:14,}}>
                 Bạn chưa nhận được Mail?
             </Text>
             <TouchableOpacity>
                 <Text style={{color:'#376AED',fontSize:14,}}>Gửi lại </Text>
             </TouchableOpacity>
         </View>
            <TouchableOpacity style={styles.loginD} onPress = { () => {navigate('Profile')}}>
                <Text style={styles.loginD1}>Tiếp tục</Text>
            </TouchableOpacity>


        </SafeAreaView>

    );
};

// const styles = StyleSheet.create({
//     inputE1: {
//         width:328,
//         height: 50,
//         marginTop:20,
//         marginBottom:20,
//         borderRadius: 10,
//         borderWidth:1,
//         alignSelf:'center',
//     },

//     TextE: {
//         fontSize: 30    ,
//         marginTop: 100,
//         alignSelf:'center',
//         fontWeight: 'bold',
//         color:'#212529',
//     },
//     TextE2: {
//         fontSize: 14,
//         alignSelf: 'center',
//         fontWeight: 'bold',
//         marginLeft:16,
//         marginRight:16,
//     },
//     TextE1: {
//         fontSize: 14,
//         marginTop: 10,
//         alignSelf:'center',
//         marginLeft:16,
//         marginRight:16,
//         fontWeight:'bold',
//     },
//     loginD: {
//         marginTop:30,
//           backgroundColor: '#60B939',
//         width:328,
//         height:50,
//         alignSelf:'center',
//         borderRadius:10,
//       },
//       loginD1: {
//         color: 'white',
//         fontSize:14,
//         alignSelf:'center',
//         marginTop:12,
//     },

// });
export default Login;
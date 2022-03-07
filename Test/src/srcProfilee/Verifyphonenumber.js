import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styleProfile";
const Login = () => {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);
    const C1 = { uri: "https://massageishealthy.com/wp-content/uploads/2018/12/avartar-massage-healthy-cu.png" };
    const [isSecureText, setSecureText] = React.useState(true);
    const { navigate } = useNavigation();

    return (
        <SafeAreaView>
            <Text style={styles.TextC}>XÁC MINH SỐ ĐIỆN THOẠI CỦA BẠN.</Text>
            <Text style={styles.TextC1}>
                Để tăng tính xác thực cho tài khoản, chúng tôi khuyên bạn nên nhập chính xác số điện thoại của mình.
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <View stlye={{ flexDirection: 'row' }}>
                <TextInput  
                    style={styles.inputC}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="+84" 
                />
                 <Image  source={C1}  style={{ position: 'absolute', right: 17, bottom: 26, }} />
                </View>
          
                <TextInput
                    style={styles.inputC1}
                    onChangeText={onChangeNumber1}
                    value={number1}
                    placeholder="Nhập Số Điện Thoại"
                />
            </View>
            <Text style={styles.TextC2}>
            Chúng tôi sẽ gửi tin nhắn có kèm OTP cho bạn qua số (+84)
            </Text> 
            <TouchableOpacity style={styles.containerC} onPress = { () => {navigate('Verifyphonenumber1')}}>
                <Text style={styles.loginC}>Tiếp tục</Text>
            </TouchableOpacity>


        </SafeAreaView>

    );
};

// const styles = StyleSheet.create({
//     inputC: {
//         height: 50,
//         marginLeft: 10,
//         borderWidth: 1,
//         width:100,
//         borderBottomLeftRadius: 10,
//         borderTopLeftRadius: 10,
//         paddingHorizontal: 20,
//         borderColor: "#C4C4C4",
        
//     },
//     inputC1: {
//         height: 50,
//         width:'68%',
//         marginLeft: 4,
//         marginRight: 5,
//         borderWidth: 1,
//         borderBottomRightRadius: 10,
//         borderTopRightRadius: 10,
//         paddingHorizontal: 20,
//         borderColor: "#C4C4C4",
     
    
//     },

//     TextC: {
//         fontSize: 30,
//         marginTop: 100,
//         alignSelf: 'center',
//         fontWeight: 'bold',
//         color:'#212529',
       
//     },
//     TextC2: {
//         fontSize: 15,
//         marginTop: 20,
//         alignSelf: 'center',
//         fontWeight: 'bold',
    
//     },
//     TextC1: {
//         fontSize: 15,
//         marginTop: 20,
//         alignSelf: 'center',
//         fontWeight: 'bold',
//         marginBottom:20,
//     },

//     loginC: {
//         color: 'white',   
//         marginTop: 15,
//         fontSize: 15,
//         alignSelf:'center',
//     },
//     containerC: {
//         alignSelf:'center',
//         backgroundColor: '#60B939',
//         width:328,
//         height:50,
//         borderRadius: 10,
//         marginTop:30,
//       },

// });

export default Login;
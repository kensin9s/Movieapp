import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styleProfile";
import Muiten from '../srcProfilee/svgProfile/Muiten.svg';

import Setting from '../srcProfilee/svgProfile/setting.svg';
import Star from '../srcProfilee/svgProfile/star.svg';
import Help from '../srcProfilee/svgProfile/help.svg';
import Home from '../srcProfilee/svgProfile/home.svg';
import Comunity from '../srcProfilee/svgProfile/comunity.svg';
import Manage from '../srcProfilee/svgProfile/manage.svg';
import Message from '../srcProfilee/svgProfile/message.svg';
import Account from '../srcProfilee/svgProfile/account.svg';

const image = { uri: "data:image/jpeg;base64,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" };
const image1 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW98wR0DAfyEIDvdWw_r08vj5rJ62UA78qA&usqp=CAU" };
const image2 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidsd_i3yjiWrWgSDkmwlWwv50VkUldmXZWw&usqp=CAU" };
const image3 = { uri: "https://toppng.com/uploads/preview/orange-transparent-email-icon-red-email-icons-11563007385mpkiku3cqg.png" };
const image4 = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png" };
const image5 = { uri: "data:image/png;base64,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" };

// const Item = ({ item }) => (

//     <Text style={[styles.title]}>{item.title}</Text>

// );

const UselessTextInput = () => {
    const { navigate } = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <View style={{ flexDirection: 'row', marginTop: 44, marginBottom: 21, marginLeft: 16, }}>

                <View style={{ flexDirection: 'row', width: 80, height: 80, }}>
                    <Image source={image} style={styles.image} />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 1, bottom: 1, }}>
                        <Image source={image1} style={styles.image1} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 4, }}>
                    <Text style={{ color: '#212529', fontSize: 18, marginLeft: 13, }}>Uchiha Itachi</Text>
                    <Text style={{ color: '#666666', fontSize: 14, marginLeft: 17 }}>Uchiha, Konoha</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#376AED', fontSize: 14, marginLeft: 17, }}>Xem tài khoản như khách thăm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ridesFriends}>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>132</Text>
                    <Text style={styles.Text}>Đã cho</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>200</Text>
                    <Text style={styles.Text}>Theo dõi</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>20</Text>
                    <Text style={styles.Text}>Đang theo dõi</Text>
                </View>
            </View>
            <View style={styles.square}>
                <View >

                    <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 20, marginBottom: 20, }}>Đã xác minh</Text>


                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5, marginBottom: 20, }}>
                    <TouchableOpacity>
                        <Image source={image3} style={styles.baseimage} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={image2} style={styles.baseimage1} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={image4} style={styles.baseimage2} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={image5} style={styles.baseimage3} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={{ marginTop: 20, }}>
                    <View style={styles.setting} >
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 18, justifyContent: 'space-between' }} onPress={() => { navigate('Settingaccount') }}>
                            <Setting style={{ height: 20, width: 20, }} />
                            <Text style={styles.baseText}>Cài dặt tài khoản</Text>
                            <View style={{ alignSelf: "flex-end" }}>
                                <Muiten style={{ height: 20, width: 20, }} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 21, justifyContent: 'space-between' }} onPress={() => { navigate('evaluateApp') }}>
                            <Star style={{ height: 20, width: 20, }} />
                            <Text style={styles.baseText}>Đánh giá ứng dụng</Text>
                            <View style={{ alignSelf: "flex-end" }}>
                                <Muiten style={{ height: 20, width: 20, }} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 21, justifyContent: 'space-between' }}>
                            <Help style={{ height: 20, width: 20, }} />
                            <Text style={styles.baseText}>Trợ giúp</Text>
                            <View style={{ alignSelf: "flex-end" }}>
                                <Muiten style={{ height: 20, width: 20, }} />
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>


            {/* <View style={{ flexDirection: 'row', marginTop: 14, }}>
                <View >
                    <TouchableOpacity>
                        <Home style={{ marginTop: 10, marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 22, }}>
                    <TouchableOpacity>
                        <Comunity style={{ marginTop: 10, marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 22, }}>
                    <TouchableOpacity>
                        <Message style={{ marginTop: 10, marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 22, }}>
                    <TouchableOpacity>
                        <Manage style={{ marginTop: 10, marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 22, }}>
                    <TouchableOpacity>
                        <Account style={{ marginTop: 10, marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>



            </View> */}

        </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     square: {
//         height: 107,
//         width: 328,
//         backgroundColor: '#FFFFFF',
//         borderRadius: 16,
//         alignSelf: "center",

//     },
//     ridesFriends: {
//         //paddingTop: 70,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         width: '100%',
//         marginBottom: 22,
//     },
//     Text: {
//         fontSize: 14,
//         alignSelf: 'center',

//     },
//     Text1: {
//         fontSize: 14, marginTop: 21, alignSelf: 'center', marginLeft: 12,
//     },

//     numbers: {
//         fontSize: 30,
//         color: 'black',
//         //fontWeight: 'bold',
//         alignSelf: 'center',
//     },
//     verticleLine: {
//         height: '50%',
//         width: 0.85,
//         alignSelf: 'center',
//         backgroundColor: '#C4C4C4',
//     },
//     image: {
//         height: 80,
//         width: 80,
//         //alignSelf: 'center',
//         borderRadius: 100,
//     },
//     baseimage: {
//         height: 30,
//         width: 30,
//         alignSelf: 'center',
//         borderRadius: 20,
//         marginLeft: 20,
//     },
//     baseimage1: {
//         height: 30,
//         width: 30,
//         alignSelf: 'center',
//         borderRadius: 20,
//         marginLeft: 62.5,
//         marginRight: 62.5,
//     },
//     baseimage2: {
//         height: 30,
//         width: 30,
//         alignSelf: 'center',
//         borderRadius: 20,
//         marginRight: 56,
//     },
//     baseimage3: {
//         height: 30,
//         width: 30,
//         alignSelf: 'center',
//         borderRadius: 20,
//         marginRight: 20,
//     },
//     baseimage4: {
//         height: 20,
//         width: 20,
//         borderRadius: 20,
//         marginTop: 18,
//     },

//     image1: {
//         height: 20,
//         width: 20,
//         borderRadius: 20,

//     },
//     image2:{
//         width: 20, height: 20, alignSelf: 'flex-end',
//     },
// });

export default UselessTextInput;
import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import dataList from "./dataUnfollow";
import styles from "./stylesFollow"

const Component = ({id, index, name, image, isFollow, fromList}) => {
    const [textFollowed, setTextFollowed] = useState('');
    const [IsFollowStatus, setIsFollowStatus] = useState(isFollow);

    const changeStatus = () => {
        if (IsFollowStatus) {
            dataList[index].isFollow = false
            setIsFollowStatus(false)
        } else {
            dataList[index].isFollow = true
            setIsFollowStatus(true)
        }
    }

    return (
        <View style={styles.viewA}>
            <Image source={{ uri: image}} style={styles.ImageA} />
            <Text style={{ marginLeft: 11, marginTop: 27, fontSize:14,flex: 0.99, }}>{name}</Text>
            {fromList ? (
                <TouchableOpacity style={IsFollowStatus ? styles.touchA1 : styles.touchA} onPress={changeStatus}>
                 <Text style={styles.TextA}>{IsFollowStatus ? "Bỏ theo dõi" : "Theo dõi"}</Text>
                </TouchableOpacity>
            )  : (
                <View/>
            )
            }
        </View>
    )
}
export default Component;

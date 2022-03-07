import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationActions } from 'react-navigation';
import styles from "./styleProfile";
import Muiten from '../srcProfilee/svgProfile/Muiten.svg';
import Info from '../srcProfilee/svgProfile/info.svg';
import Bell from '../srcProfilee/svgProfile/bell.svg';
const a1 = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////d3d38/Pzg4OCCgoLv7+9JSUmpqam4uLivr6/k5OSQkJATExMZGRn19fVgYGB0dHRRUVGhoaHExMRnZ2dYWFhCQkIdHR3KysrW1tYlJSW1tbU9PT0vLy8JCQmMjIwWFhY1NTWYmJh8fHxubm5fztJAAAAK5klEQVR4nOVd6WKqzBIcViEuQCRuRCUu7/+KNxyjgsLQPd3N+Hnr9zlChVl6L+VIw0vcOJpPssV2V6yme7WfrorddpFN5lHsJp7485Xgb4d+Xp6Xe6XDfnkucz8UfAsphm6cjWZabnXMRlnsCr2JBMNxlE7B5O6YptFY4G24GSZ5AP90LR8zyBPmN2JlGMZfBHZXfMWs25KRYZzqDxU49mnM91pcDN2Aid0VAdfJw8Iw+Rgx86sw+mDZkgwMwwnlbNFhNmHYkWSG40yI3gUZ+QIhMnRTUX4VUuKGJDH0z+L8Kpx9SwyF12cdGWE/GjP0JoPxq3A0dkJMGcY/gxJU6sfUCDBj6H4OzK/Cp9mRY8Rw2AV6x2QghpvCEkGlis0ADL3SGr8KJfrEwTL0t1YJKrXFXo5IhpFlfhUiQYaJvI0GQYryOTAMXXtHTBMF5t5AMPy2TayGbwmG3E48DQE7Q8+GFaPDJ/TaADIMbV8Sz9gC/Q0YQ3dlm08LVrDzBsRwbZtMB9ZcDHPbTDqR8zCMbfPQAOA09jP8sM1Ciw86Q06Cq8N2OVpuD5znVi/FPoZcS7Q4R5tbIjT0N9GZywTsW6g9DHkOmeI4fjaWk/GRh2TPcaNnyHJNnLvvLZcl4Kq/NLQMXYbHB/qw/JjD3NVe/TqGIf1EWPR75P6C/JSVzoDTMPTotigsxkk/zbYaM1zDkOxNjKCx+JCcfvw0YUjeIHAXTvRhnQzJHv0RQdBxjtTHdXr9XQzJxygyIkaP4nUdqB0ME+pljPuCFahfseiIwHUwpIYNMXvwCupeTDEMqUtmZEDQcagnavvGaGXoEx+1N0vZhtSKo1bzoo0h+ao3TWZSr/7Wi7+NYUl8kOb67QHVyChhDDfExyjzEpgx9dEt+cUWhtSLwuQcvYJ6nhYQhuQUNqWKifwRnxPhTwzJxsyZQNBxyC7xk2nzxJDsURik2msgHwJPx9wjQ7KvdiARdJwD9QUer6oHhh65EAhvkDZBdjJ+Hi7FB4b0ShlqaS89NvRw2DQZko8yRa/Ipb9C8zBvvhG92vCLzJBe7p91M6Ra3Arv+D6DoaClYYE3GDLEZyH5Lj0YwuyNK7nOkCMATC89Dxneon7c1Rly1APRu+08hreou/s1hgwHqSoYGHLka2rHaY0hR9n2lkzQcTjKPmrH6Z0hx/onOL93sFTu3M+DO0OWwt8FA0N6pkbVDZsbw4SltedlvuHsFj29MeTJ17/KPqzl928MebrPXuUsrYVsrww5bvsKr3EfVrje+leGXLWVr2HTVLgGxK4MmX72NezSC5oM2Sq7XsK3uCBuMGQrUX8F//APaZ0hOSdyB5kh25v85Ycub8RYfmg/TnNDXGPItjJeINZ2x9edYcL3q/bjpTUkN4asRcCWY9515DeGrK0UmZ5CD1h7i4MbQ96JAVZzTw3Mrgx5f9Zq/vAB4z+G3C13FnPAD4j+GHL33NnL4z8i/WNoMvJIC1u1GE+YXhgyWhFXmK1T7jWq/llYSqRjxE5NVAvifwwlxlucDAieBN4j+8dQYj6QhdrEVowqhqHMhKA5kuBc5C1m4S9DhqRhK3AjHqQGUfi/DMV67zB7UWIP/kP+y7CU+nG1BNfqL8XeofxlKDkJaah+i26cfxnK/f3UUD0zGiwd5fEFoVpx0i/VUGwHXrD3FGcEox2ZpndNfphWogSs0idsj35L/6F/HKLJ31UD9THv0mjtXtM2nruO0t0wD47VoBNnpsVheSjYvTUdIiVjLb0O5srW3K6hMFHDjQa0g0yJ3rcvgIV6vbEsvNiqgQ5ta9ipV5luJYVCveJsHU6s1KDXrwVMlbBrYR3vzq/Cu3Pc/x/sw/c/S9//Pnx/m+b97dL39y3e3z98fx9/wDjN4TM9n4LTOf3kLO3qwXyAWFuxmHzk/mMBuOfnH5OF/F0VicZLD4sy3+hr271NXi4kP2ksFvMeBfEYWrjvjeNAJNeuqpi3RN5iVa7xMj/JupSwIBP23NPP17d5R0L4/cWsm7H3ePOHRUaWTUvyjPP4WbLmgE8Ga7OV5JovqXjmy+NvvznlKL1vJnu5ZKrF+Cn59RndkmNL5iz1NLs5t2bhBcmc7tr5DDVRh1hOLdWLicbAv5ooWl1bwahU2IqYdLKOqLWJM3ojVz8iwiLLiPWlpcz+e0RSGr9hTKoRRimF0GCsjuJS6rzbpr/JoTR6x786b6Na/R2t+QePjcnNca3VN3CCR8PswDoSgzP/2m+Br5Gn9TaZAn/oX3tm0H1P2ApnLmBjSre+J2y3EbWJ0hzIavd77xrO+LazRC/ALdR7/yEqkkHv1qYA1c977yHF/L+dnJ0NgYe4NGp9wBjDjT40gQbEjqr3csP78WmzOzkAjro0+vHhZo3dNVoBPPukMVMBvEyHNUbbUQLftTkXAzqrgawDzgCoCfb3z3HzaTjGQNEB66V9nE8DcxLtWTN1wCybxxlDsGgNSMpNHCAFo6c5UbBZXyQZdzaA4p/Ps75A89pe4aCBHTUt89pAPY7/HYYtM/dAM7Y6RDIGBsQ8aZubCPJMbPm+dUD84NbZl7CbdLgIYhdA91r7/FLQ198NH4JqIoG4Tx0zaGF/HdtbEeQjdM0Rhjkmdo3vEvKKjTiLwTzvfulPOcBmkHbP8wYGeuzZbjDFSc1MdujcyaEj+lcAB4E1q10epgACA5J2bBugY/jgAJnpW/zQx5TiEQLfTa9vAQ1nFMNTDIE5xB6NEvAwqtnQC3UMTK706szAM8LD2m/mr0XQexry0gALEwP0nhCaXZ3CmOwAS4aCNLsQ4yeHCkzBq+1humtOCf7B8xAhcA+eNwJq52H0D7fy540LL/wC6x+iivmkNyNGtResYYmrzsgkfeIEk/RF6JDiSmxWcinFHFPbjtKSReoBZzIHjofK2iP1gJHFbnuJGswY10WA1HRG63KPuH3GDbIECq3LjR/pG3C6GyH66Z0/pZmDjx55G3Cdqgl6YLImsalhaCB8POH4jiG+JbL1qu9n6IQGfUgnsnKAQTfJSveH1ao1GFUPLyjXY27Ulqz9q+r1KMBuWQP7wOxDuoFZl5neUe1R3DBtqCmOT02jenj+0bSWu2fN9GmKmBfy705r8PzS9cm8O6bP2OhVTaFoee2XQd4XsRrnwZLSAtmbY+jXhSHLlS2DaB0+r1kvXEcBufmxP4kCUL5h6oU+pKcgKMtJWQbBKWVqbgbYwxBtH7FZymRALiaQepHZpSEPUDwTps/kvuKcnhXs1gUqUIWvN+RlC7yLoBpbHre4BhWfUIsCriLGLAFDBFzMBqGThvT6RYGIYWKU4Iy7ALmB6nxEad0l3Jo7ZkhRsQSkmt+gk6M7gOw9xuoV+ravjS22ihetyOiVVgmW6OCzgebkxt6BUxhEZY1UNW3NB8MJu1AYOq4NC+fTLPpjqowaM88C6sWPaWrEWPvVG3apHo3TWwR12/FwAwkzQiydpN/rS6rw1PiRGlmICsWuvB2XEvMEZA1m4bWakevn6CrTTjiRUW5TasaRy2Jg+OtzfEjMBBx9sOQjWRg6VVaFmZ9hducZXAx/EadcAwr3KWPlAyPD3x0Zc0iYf8WsBcisDJ1q7GFAOXdmAXnw4iO4GVYYR6nJYKZpGkmUVkswrODG2Qj+MWejLJaqcpRiWCH08/LckxzcL89l7ktW/ksyvMBL3DiaT7LFdlespnu1n66K3XaRTeZR7CbyJbj/A2sPnknwjDOUAAAAAElFTkSuQmCC" };
const a2 = {uri: "https://freeiconshop.com/wp-content/uploads/edd/settings-solid.png",};
const a3 = { uri: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png" };

const settingacc = () => {
    const { navigate } = useNavigation();
   
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%', }}>
            <View style={styles.setting}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop:21, justifyContent:'space-between'}} onPress = { () => {navigate('Profile1')}} >
                    <Info />
                    <Text style={{ fontSize: 14, marginLeft: 10 }}>Thông tin cá nhân</Text>
                    <Muiten/>
                </TouchableOpacity>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity style={{ flexDirection: 'row',marginTop:21, justifyContent:'space-between'}} onPress = { () => {navigate('setupnotifications')}}>
                    <Bell />
                    <Text style={{ fontSize: 14, alignSelf:'center',marginTop:3}}>Cài đặt thông báo</Text>
                    <Muiten/>
                </TouchableOpacity>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity onPress = { () => {navigate('Login')}}>
                    <Text style={{ fontSize: 14, alignSelf:'center', color: '#FF0000',marginTop:21  }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
// const styles = StyleSheet.create({
//     imagee: {
//         height: 30,
//         width: 30,
//        //alignSelf:'center',
//        // justifyContent:'center',
//     },
//     arrow:{
//         width:30,
//         height:30,
//         alignSelf:'flex-end',
//     },
//     setting: { width: 360, height: 56, borderBottomWidth: 1, alignSelf: 'center', borderBottomColor: "#C4C4C4", },
// });


export default settingacc;
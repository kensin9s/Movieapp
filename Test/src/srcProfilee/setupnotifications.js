import React, { useState } from "react";
import { View, Switch, StyleSheet,Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const F1 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuo1YcCcybC_hMWAnQolIP7dIk-ZrWLmOqQ&usqp=CAU" };
const F2={uri:"https://cdn.icon-icons.com/icons2/2248/PNG/512/account_multiple_icon_135993.png"}
import styles from "./styleProfile";
import Messager1 from '../srcProfilee/svgProfile/messager1.svg';
import Follower from '../srcProfilee/svgProfile/follower.svg';
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  return (
      <SafeAreaView>
        <View  style={{flexDirection:'row',height:56, borderBottomWidth:1, width:360,alignSelf:'center',borderBottomColor:'#C4C4C4',}}>
        <Messager1 style={styles.imageF1}/>
        <Text style={{fontSize:14,fontWeight:'bold',alignSelf:'center',marginLeft:20,}}>Tin Nhắn</Text>
        <View style={styles.containerF}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
            </View>
            <View  style={{flexDirection:'row',height:56, borderBottomWidth:1, width:360,alignSelf:'center',borderBottomColor:'#C4C4C4',}}>
        <Follower  style={styles.imageF1}/>
        <Text style={{fontSize:14,fontWeight:'bold',alignSelf:'center',marginLeft:20,}}>Người theo dõi</Text>
        <View style={styles.containerF1}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
            />
            </View>
            </View>
        </SafeAreaView>
   
  );
};

// const styles = StyleSheet.create({
   
//     imageF1: {
//       height: 30,
//       width: 30,
//       marginLeft:10,
//       marginTop: 0,
//       alignSelf:'center',
     
//     },
  
//     containerF: {
//     alignSelf:'center',
//     marginLeft:170,
//       justifyContent: 'center',
//     },
//     containerF1: {
//         alignSelf:'center',
//         marginLeft:135,
//           justifyContent: 'center',
//         },
//   });
  

export default App;
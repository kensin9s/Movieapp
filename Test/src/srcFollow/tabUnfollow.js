import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import styles from "./stylesFollow"
import Component from "./component";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
import data from './dataUnfollow';
const SecondRoute = () => {
    return (
      <SafeAreaView>
        <View style={{ marginTop: 15, }}>
          {
            data.map((item, index) => (
              <Component id={item.id} index={index} name={item.name} image={item.image} isFollow={item.isFollow} fromList={true}/>
            ))
          }
        </View>
      </SafeAreaView>
    );
  
  };

  export default SecondRoute;
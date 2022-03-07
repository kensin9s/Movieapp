import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import styles from "./stylesFollow"
import Component from "./component";
import FirstRoute from './tabFollow';
import SecondRoute from './tabUnfollow';
import data from './dataUnfollow';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";



export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [countFollow, setCountFollow] = React.useState(data.filter(i => i.isFollow == true).length)
  
  React.useEffect(() => {
      setCountFollow(data.filter(i => i.isFollow == true).length)   
      console.log('ahihi', data.filter(i => i.isFollow == true)) 
  }, [data.filter(i => i.isFollow == true).length])

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title:''},
    { key: 'second', title:'' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#376AED' }}
      style={{ backgroundColor: '#FFFFFF',}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color:'black', margin: 8 }}>
          {route.key == "first" ? countFollow + " nguoi theo doi" : "theo doi " + 5 + " nguoi"}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width ,}}
      renderTabBar={renderTabBar}
      style={{marginTop:80,}}      
    />
  );
}
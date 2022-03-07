import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import Love from '../srcProfilee/svgProfile/love.svg';
import Smile from '../srcProfilee/svgProfile/smile.svg';
import Cry from '../srcProfilee/svgProfile/cry.svg';
import Tich from '../srcProfilee/svgProfile/tich.svg';
import { useNavigation } from '@react-navigation/native';

const password = () => {
  //const { navigation } = props;
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [value, setVlue] = React.useState(null);
  return (
    <SafeAreaView >
      <View style={{ alignSelf: 'center' }}>
        <Text style={styles.Text}>Đánh giá của bạn sẽ giúp chúng cải thiện {"\n"}                     dịch vụ tốt hơn</Text>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
          <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#E5E5E5', borderRadius: 10 }} onPress={() => setVlue(1)}>
            {value === 1 && <Tich style={styles.tichxanh} />}
            <Love style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.baseText}>Rất hài lòng</Text>
        </View>
        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
          <TouchableOpacity style={styles.feel} onPress={() => setVlue(2)}>
            {value === 2  &&
              <Tich style={styles.tichxanh} />
            }
            <Smile style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.baseText}>       Hài lòng</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity style={styles.feel} onPress={() => setVlue(3)}>
            {value === 3 &&
              <Tich style={styles.tichxanh} />
            }
            <Cry style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.baseText}>    Chưa hài lòng</Text>
        </View>
      </View>
      <Text style={styles.comment}> Nhận xét</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập nội dung bạn muốn nhận xét..."
      />



    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  feel: { width: 100, height: 100, backgroundColor: '#E5E5E5', marginLeft: 14, borderRadius: 10 },
  baseText: { alignSelf: 'center', fontSize: 14 },
  comment: { color: '#376AED', alignSelf: 'flex-start', marginTop: 20, fontSize: 14, marginLeft: 16 },
  Text: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    //  fontWeight:'bold',
    // marginLeft:16,

  },
  icon: { height: 60, width: 60, alignSelf: 'center', marginTop: 20 },

  input: {
    height: 60,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 360,
    borderColor: "#C4C4C4",
    marginLeft: 16,
    // marginRight: 16,
    marginTop: 15,
    backgroundColor: '#DFDCDC',
  },
  tichxanh: { widt: 24, height: 24, position: 'absolute', top: 70, left: 70 }
});

export default password;
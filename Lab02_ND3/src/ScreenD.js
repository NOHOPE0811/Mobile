import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

const LinearEquation = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [x, setX] = useState(null);

  const solveEquation = () => {
    const aNumber = parseFloat(a);
    const bNumber = parseFloat(b);

    if (!isNaN(aNumber) && !isNaN(bNumber) && aNumber !== 0) {
      const result = -bNumber / aNumber;
      setX(result);

      // Hiển thị thông báo
      Alert.alert(
        'Kết quả',
        `Giá trị của x: ${result}`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Đặt lại giá trị của a, b và x
              setA('');
              setB('');
              setX(null);
            },
          },
        ]
      );
    } else {
      setX(null);
    }
  };

  return (
    <BackgroundImage
    source={require('../images/bg.png')}
    style={styles.body}>
        
    <View style={styles.container}>
      <Text style={styles.equationText}>Phương trình bậc nhất: ax + b = 0</Text>
      <TextInput
        style={styles.input}
        placeholder=" Nhập giá trị a"
        value={a}
        onChangeText={(text) => setA(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder=" Nhập giá trị b"
        value={b}
        onChangeText={(text) => setB(text)}
        keyboardType="numeric"
      />
      <Button title="Giải phương trình" onPress={solveEquation} />
      {x !== null && (
        <Text style={styles.resultText}>Giá trị của x: {x}</Text>
      )}
    </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  equationText: {
    color:'yellow',
    fontSize: 25,
    fontWeight:'bold',
    marginBottom: 10,
    borderRadius:10,
    paddingVertical:20,
  },
  input: {
    fontSize:20,
    color:'yellow',
    width: 210,
    height: 50,
    borderWidth: 5,
    borderColor:'red',
    marginBottom: 10,
    paddingTop:20,
  },
  resultText: {
    fontSize: 18,
  },
  body:{
    flex:1,
    backgroundColor:'#ffff',
    alignItems:'center',

  },
});

export default LinearEquation;

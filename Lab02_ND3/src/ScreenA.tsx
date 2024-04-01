import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { Image, Icon, Input, Button, } from '@rneui/themed';

const Calculator:React.FC<{}>=()=>{
  const [sh1, setSh1] = useState<string>('0');
  const [sh2, setSh2] = useState<string>('0');
  const [sh3, setSh3] = useState<string>('0');

  const handleOperation: React.FC<{ operator: string }> = (operator) => {
    // Kiểm tra hai Input không phải là số hoặc rỗng
    if (isNaN(parseFloat(sh1)) && isNaN(parseFloat(sh2))) {
      Alert.alert('Lỗi', 'Vui lòng nhập số vào cả hai ô nhập liệu.');
      return;
    }
    else if (isNaN(parseFloat(sh1))) {
      Alert.alert('Số hạng 1 lỗi', 'Vui lòng nhập số vào ô nhập liệu.');
      return;
    }
    else if (isNaN(parseFloat(sh2))) {
      Alert.alert('Số hạng 2 lỗi', 'Vui lòng nhập số vào ô nhập liệu.');
      return;
    }
    else {
      switch (operator) {
        case '+':
          setKQ(parseFloat(sh1) + parseFloat(sh2));
          break;
        case '-':
          setKQ(parseFloat(sh1) - parseFloat(sh2));
          break;
        case '*':
          setKQ(parseFloat(sh1) * parseFloat(sh2));
          break;
        case '/':
          setKQ(parseFloat(sh1) / parseFloat(sh2));
          break;
      }
    }
  };

  const [kq, setKQ] = useState<number>(0);
  const [isQuadratic, setIsQuadratic] = useState(false);

  const toggleQuadratic = () => {
    setIsQuadratic(!isQuadratic);
  };
  function QE_Cal(a: number, b: number, c: number) {
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return { x1, x2 };
    } else if (delta === 0) {
      const x = -b / (2 * a);
      return { x };
    } else {
      return 'No real roots';
    }
  };
  const handleSolveEquation = () => {
    const a = parseFloat(sh1);
    const b = parseFloat(sh2);
    const c = parseFloat(sh3);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      Alert.alert('Lỗi', 'Vui lòng nhập số vào tất cả các ô nhập liệu.');
      return;
    }
    if (a === 0) {
      Alert.alert('Lỗi', 'Hệ số a phải khác 0.');
      return;
    }

    const solutions = QE_Cal(a, b, c);
    if (typeof solutions === 'string') {
      setKQ('Phương trình không có nghiệm thực.');
    } else if ('x' in solutions) {
      setKQ(`Nghiệm kép x = ${solutions.x}`);
    } else {
      setKQ(`Nghiệm x1 = ${solutions.x1} và x2 = ${solutions.x2}`);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.input}>
        {/* Vùng nhập dữ liệu */}
        <Input disabledInputStyle={{ background: "#ddd" }} label="Số hạng a:" leftIcon={
          <Icon
            name="reader-outline"
            type='ionicon'
            size={40}
          />}
          placeholder="123"
          color='blue'
          keyboardType="numeric"
          value={sh1}
          onChangeText={(sh1) => { setSh1(sh1); }}
          labelStyle={{ color: 'blue' }}
          inputStyle={{ color: 'blue', textAlign: 'center' }}
        />
        <Input disabledInputStyle={{ background: "#ddd" }} label="Số hạng b:"
          leftIcon={
            <Icon
              name="receipt-outline"
              type='ionicon'
              size={40}
            />}
          placeholder="123"
          keyboardType="numeric"
          value={sh2}
          onChangeText={(sh2) => { setSh2(sh2); }}
          labelStyle={{ color: 'blue' }}
          inputStyle={{ color: 'blue', textAlign: 'center' }}
        />
        {isQuadratic ? (
          <Input disabledInputStyle={{ background: "#ddd" }} label="Số hạng c:"
            leftIcon={
              <Icon
                name="receipt-outline"
                type='ionicon'
                size={40}
              />}
            placeholder="Enter c"
            keyboardType="numeric"
            value={sh3}
            onChangeText={(sh3) => { setSh3(sh3); }}
            labelStyle={{ color: 'blue' }}
            inputStyle={{ color: 'blue', textAlign: 'center' }}
          />
        ) : (
          <View>
          </View>
        )}
        {isQuadratic ? (< Button
          title='Giải phương trình'
          containerStyle={{ width: '50%', marginVertical: 10 }}
          onPress={handleSolveEquation}
        />
        ) : (
          <View>
          </View>
        )}
      </View>
      <View style={styles.result}>
        {/* Vùng hiển thị kết quả */}
        <Text style={{ fontSize: 24, }}>KẾT QUẢ</Text>
        <Text style={{ fontSize: 30, color: 'blue' }}>{kq}</Text>
      </View>
      <View style={styles.operator}>
        {/* Vùng chứa các toán tử*/}
        <Button
          title='+'
          containerStyle={{ width: '10%', marginLeft: 1, }}
          onPress={() => handleOperation('+')}
        />
        <Button
          title='-'
          containerStyle={{ width: '10%', }}
          onPress={() => handleOperation('-')}
        />
        <Button
          title='*'
          containerStyle={{ width: '10%', }}
          onPress={() => handleOperation('*')}
        />
        <Button
          title='/'
          containerStyle={{ width: '10%', marginRight: 1, }}
          onPress={() => handleOperation('/')}
        />
        <Button
          title={isQuadratic ? 'Xử lý bậc 2' : 'Xử lý phép toán'}
          containerStyle={{ width: '40%', marginRight: 1, }}
          onPress={toggleQuadratic}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: '#3399FF',
  },
  input: {
    flex: 2.7,  //input chiếm 2/7
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#45E5ED',
  },
  result: {
    flex: 1.3, //result chiếm 1/3
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  operator: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
  },
  h_text: {
    flex: 3,
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  },
  h_logo: {
    flex: 2,
  },
});


export default Calculator;
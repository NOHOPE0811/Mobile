// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Thực hiện các công việc chuẩn bị trước khi vào ứng dụng
    // Ví dụ: kiểm tra đăng nhập, tải dữ liệu, ...

    // Tạm thời ẩn màn hình chờ sau khi ứng dụng khởi chạy
    const delay = setTimeout(() => {
      // TODO: Chuyển hướng đến màn hình chính hoặc làm bất kỳ điều gì bạn muốn ở đây
    }, 3000);

    // Cleanup timeout khi component unmount
    return () => clearTimeout(delay);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logoctu.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;

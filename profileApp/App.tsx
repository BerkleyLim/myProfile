/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// 기본 키
// import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Switch } from 'react-native';
// import type { PropsWithChildren } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

// 설치시!
// - node.js
// - JDK
// - Android Studio
// - Android SDK
// - Android Simulator
// - Ruby : rbenv 설치해서, 루비는 2.7.6을 설치해야 함 (어이 없게도 다른 버전 설치하면 정상 동작 안됨)
// - Xcode
// - iOS Simulator
// - Cocoa Pods

/**
 * 원리 익히기! <네이티브에 쓰이는 것들>
- View
- Text
- Image
- ScrollView
- TextInput
- Button
- Switch
 */
function App(): JSX.Element {
  // 리액트 네이티브 연습 끝
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!!
      </Text>
      <StatusBar />

      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
        }}
        style={styles.url_image}
      />
      <TextInput placeholder="이름을 입력해주세요" />

      <Button
        title="click"
        onPress={() => {
          console.log('clicked');
        }}
      />

      <Switch value={true} />

      <ScrollView>
        <Image
          source={{uri: 'https://i.ytimg.com/vi/ByH9LuSILxU/maxresdefault.jpg'}}
          style={styles.url_image}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  },
});

export default App;

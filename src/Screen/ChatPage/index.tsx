import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Styles from './styles';

const ChatPage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerTitle}>Konuşmalar</Text>
      </View>
      <Text>ChatPage</Text>
    </SafeAreaView>
  );
};

export default ChatPage;

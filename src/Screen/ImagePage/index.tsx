import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  ViewBase,
} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Styles from './styles';
const index = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.imageContainer}>
        <ScrollView pagingEnabled style={Styles.flex} horizontal>
          <Image
            resizeMode="contain"
            style={Styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1516767784670-cfc730ed0f87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <Image
            resizeMode="contain"
            style={Styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </ScrollView>
      </View>
      <View style={Styles.closeContainer}>
        <TouchableOpacity>
          <View style={Styles.closeButton}>
            <Text style={Styles.closeText}>X</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomContainer}>
        <View style={Styles.contactContainer}>
          <TouchableOpacity style={Styles.phoneButton}>
            <IconMI name="phone" size={25} color="white" />
          </TouchableOpacity>
          <View style={Styles.space} />
          <TouchableOpacity style={Styles.messageButton}>
            <IconI name="paper-plane" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={Styles.shareContainer}>
          <TouchableOpacity style={Styles.shareButton}>
            <IconI name="share-social" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

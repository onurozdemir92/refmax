import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import Styles from './styles';

const RefPage = ({route, navigation}) => {
  const refmax: IRef = route.params.Ref;

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={Styles.backIcon}>
            <IconI name="arrow-back-sharp" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View style={Styles.headerIconsContainer}>
          <TouchableOpacity>
            <View style={Styles.headerButton}>
              <IconMI name="favorite" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.headerButton}>
              <IconMI name="more-vert" size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView pagingEnabled={true} horizontal={true}>
        {refmax.images.map((image: string) => (
          <View style={Styles.imagesContainer}>
            <Image
              resizeMode="contain"
              style={Styles.image}
              source={{uri: image}}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RefPage;

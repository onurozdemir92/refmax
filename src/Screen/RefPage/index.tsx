import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Linking,
  Share,
} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import Styles from './styles';

const RefPage = ({route, navigation}) => {
  const [imageIndex, setImageIndex] = useState<number>(1);
  const setIndex = e => {
    const index: number = parseInt(
      e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );
    setImageIndex(index + 1);
  };
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
          <TouchableOpacity onPress={() => console.log('share')}>
            <View style={Styles.headerButton}>
              <IconI name="share-social" size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            onScroll={e => setIndex(e)}
            pagingEnabled={true}
            horizontal={true}>
            {refmax.images.map((image: string, index) => (
              <View key={index} style={Styles.imagesContainer}>
                <Image
                  resizeMode="contain"
                  style={Styles.image}
                  source={{uri: image}}
                />
              </View>
            ))}
          </ScrollView>
          <View style={Styles.imageIndexContainer}>
            <View style={Styles.indexSubContainer}>
              <Text style={Styles.imageIndexText}>
                {imageIndex + '/' + refmax.images.length}
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.profileContainer}>
          <View style={Styles.profileImageContainer}>
            <Image
              style={Styles.profileImage}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1583243552802-94ccb4200150?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}
            />
          </View>
          <View style={Styles.profileInfoContainer}>
            <Text style={Styles.profileNameText}>Onur Rahmi ÖZDEMİR</Text>
            <View style={Styles.profileStarContainer}>
              <IconI name="star" size={20} color="#F6E40A" />
              <IconI name="star" size={20} color="#F6E40A" />
              <IconI name="star" size={20} color="#F6E40A" />
              <IconI name="star" size={20} color="#E2E2E1" />
              <IconI name="star" size={20} color="#E2E2E1" />
            </View>
          </View>
          <View style={Styles.profileIconsContainer}>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+905432587801')}
              style={Styles.profiloIcon}>
              <View style={Styles.profiloIcon}>
                <IconMI name="phone" size={25} color="#6EF60A" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.profiloIcon}>
              <View style={Styles.profiloIcon}>
                <IconI name="paper-plane" size={25} color="#0AC4F6" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.refInfoContainer}>
          <Text style={Styles.refInfoTitleText}>{refmax.title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RefPage;

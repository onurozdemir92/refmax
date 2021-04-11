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
} from 'react-native';
import {IRef} from '../../Helpers/Interfaces';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Styles from './styles';
import RefmaxHorizontalItem from '../../Components/RefmaxHorizontalItem';

const RefPage = ({route, navigation}) => {
  const [imageIndex, setImageIndex] = useState<number>(1);
  const setIndex = e => {
    const index: number = parseInt(
      e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );
    setImageIndex(index + 1);
  };
  const refmax: IRef = route.params.Ref;
  const data: IRef[] = [
    {
      id: '1',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '2',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: false,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '3',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '4',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/62/320/110000004108548.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '5',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/6/320/9713620058162.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
    {
      id: '6',
      country: 'Türkiye',
      description: 'dlaksdk kdlasdlşasklş lsldkalskd lksaldkla klaskdlaskd',
      district: 'gerze',
      favorite: true,
      title: 'Apple 6s Plus',
      images: [
        'https://productimages.hepsiburada.net/s/57/320/11305732341810.jpg',
        'https://productimages.hepsiburada.net/s/7/550/9749718859826.jpg/format:webp',
      ],
      price: '10000',
      userId: '1',
      state: 'Sinop',
    },
  ];
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
          <Text style={Styles.refInfodescriptionText}>
            {refmax.description}
          </Text>
          <Text
            style={
              Styles.addressText
            }>{`${refmax.state}, ${refmax.district} `}</Text>
          <Text style={Styles.dateText}>
            {moment(refmax.date).format('DD MMMM, HH:mm')}
          </Text>
        </View>
        <View style={Styles.proportyContainer}>
          <View style={Styles.proportySubContainer}>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportyTitle}>Kilometre</Text>
            </View>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportySubTitle}>120000</Text>
            </View>
          </View>
          <View style={Styles.proportySubContainer}>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportyTitle}>Renk</Text>
            </View>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportySubTitle}>Mavi</Text>
            </View>
          </View>
          <View style={Styles.proportySubContainer}>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportyTitle}>Kapı</Text>
            </View>
            <View style={Styles.proportyStringContainer}>
              <Text style={Styles.proportySubTitle}>4</Text>
            </View>
          </View>
        </View>
        <Text style={Styles.similarTitleText}>Benzer İlanlar</Text>
        <View>
          {data.map((item: IRef, index) => {
            return (
              <RefmaxHorizontalItem
                key={index}
                refmax={item}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RefPage;

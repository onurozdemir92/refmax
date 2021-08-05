import React from 'react';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import MyPageHeader from '../../Components/MyPageHeader';
import Shoping from '../../../assets/Images/Shoping.png';
import Lira from '../../../assets/images/lira.png';
import Help from '../../../assets/images/help.png';

import Styles from './styles';

const MyPage = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <MyPageHeader navigation={navigation} title="Sayfam" />
      <ScrollView style={Styles.scroll}>
        <View style={Styles.profileContainer}>
          <Image
            style={Styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View style={Styles.nameContainer}>
            <Text style={Styles.nameText}>Onur Rahmi Özdemir</Text>
            <IconI name="shield-checkmark" size={20} color="#6DB56A" />
          </View>
          <View style={Styles.commentContainer}>
            <View style={Styles.starsContainer}>
              <IconI name="star" size={20} color="#F2BE24" />
              <IconI name="star" size={20} color="#F2BE24" />
              <IconI name="star" size={20} color="#F2BE24" />
              <IconI name="star" size={20} color="#F2BE24" />
              <IconI name="star" size={20} color="#F2BE24" />
            </View>
            <Text>3 yorum</Text>
          </View>
          <Text>Haziran 2021' den beri</Text>
        </View>
        <View style={Styles.pagesContainer}>
          <View style={Styles.pointer}></View>
          <TouchableOpacity style={Styles.pagesButton}>
            <View style={Styles.pagesButtonIconContainer}>
              <Image source={Shoping} style={Styles.shopingImage} />
            </View>
            <View style={Styles.pagesButtonTextContainer}>
              <Text style={Styles.pagesButtonText}>Marketim</Text>
            </View>
            <View style={Styles.pagesButtonArrowContainer}>
              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <View style={Styles.pointer}></View>

          <TouchableOpacity style={Styles.pagesButton}>
            <View style={Styles.pagesButtonIconContainer}>
              <Image source={Lira} style={Styles.shopingImage} />
            </View>
            <View style={Styles.pagesButtonTextContainer}>
              <Text style={Styles.pagesButtonText}>Ek hizmetler</Text>
            </View>
            <View style={Styles.pagesButtonArrowContainer}>
              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <View style={Styles.pointer}></View>

          <TouchableOpacity style={Styles.pagesButton}>
            <View style={Styles.pagesButtonIconContainer}>
              <Image source={Help} style={Styles.shopingImage} />
            </View>
            <View style={Styles.pagesButtonTextContainer}>
              <Text style={Styles.pagesButtonText}>Yardım</Text>
            </View>
            <View style={Styles.pagesButtonArrowContainer}>
              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <View style={Styles.pointer}></View>
        </View>
        <View style={Styles.buttonsContainer}>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Satın Alımlar</Text>

            <View style={Styles.buttonArrowContainer}>
              <Text style={Styles.buttonCountText}>2</Text>

              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Satışlarım</Text>

            <View style={Styles.buttonArrowContainer}>
              <Text style={Styles.buttonCountText}>13</Text>

              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Arşiv</Text>

            <View style={Styles.buttonArrowContainer}>
              <Text style={Styles.buttonCountText}>0</Text>

              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Satıldı</Text>

            <View style={Styles.buttonArrowContainer}>
              <Text style={Styles.buttonCountText}>5</Text>

              <IconI name={'arrow-forward'} size={20} color="#C8D2F5" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.logoutContainer}>
          <TouchableOpacity style={Styles.logoutButton}>
            <Text style={Styles.logoutText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyPage;

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  ScrollView,
  Linking,
} from 'react-native';
import CategoryItem from '../../Components/CategoryItem';
import FirstPageHeader from '../../Components/FirstPageHeader';
import FirstSliderContainer from '../../Components/FirstSliderContainer';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import ReklamComponent from '../../Components/ReklamComponent';
import SearchHeader from '../../Components/SearchHeader';
import {ICategory, IRef} from '../../Helpers/Interfaces';
import {categorys, refData} from '../../Helpers/TestData';
import Styles from './styles';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <Header /> */}
      {/* <SearchHeader /> */}
      <FirstPageHeader />
      <FlatList
        ListHeaderComponent={
          <View style={Styles.CategoryContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              
              style={{paddingVertical: 5}}
              horizontal={true}>
              {categorys.map((item: ICategory, index: number) => (
                // <CategoryItem key={index} data={item} />
                <FirstSliderContainer key={index} />
              ))}
            </ScrollView>
          </View>
        }
        data={refData}
        numColumns={2}
        renderItem={({item, index}) => {
          if (item.reklam === true) {
            return (
              <ReklamComponent
                onRefPress={(e: IRef) => Linking.openURL(e.url)}
                refmax={item}
              />
            );
          } else {
            return (
              <RefmaxItem
                onRefPress={(e: IRef) => navigation.push('RefPage', {Ref: e})}
                refmax={item}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default FirstPage;

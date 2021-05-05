import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  ScrollView,
} from 'react-native';
import CategoryItem from '../../Components/CategoryItem';
import Header from '../../Components/Header';
import RefmaxItem from '../../Components/RefmaxItem/intex';
import SearchHeader from '../../Components/SearchHeader';
import {ICategory, IRef} from '../../Helpers/Interfaces';
import {categorys, refData} from '../../Helpers/TestData';
import Styles from './styles';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <Header /> */}
      <SearchHeader />
      <FlatList
        ListHeaderComponent={
          <View style={Styles.CategoryContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{paddingVertical: 5}}
              horizontal={true}>
              {categorys.map((item: ICategory, index: number) => (
                <CategoryItem key={index} data={item} />
              ))}
            </ScrollView>
          </View>
        }
        data={refData}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <RefmaxItem
              onRefPress={(e: IRef) => navigation.push('RefPage', {Ref: e})}
              refmax={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FirstPage;

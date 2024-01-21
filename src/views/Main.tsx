import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import cn from 'classnames';

import {PromotionCard} from '@app/components';

const DATA = [
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/95670fd2-a8e3-4818-8369-c061c105a6b2/tr/desktop/95670fd2-a8e3-4818-8369-c061c105a6b2.png',
    Id: 63,
    Name: 'Yemek',
    Rank: 3,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/06364e66-e721-4c51-b824-185471b1d3a7/tr/desktop/06364e66-e721-4c51-b824-185471b1d3a7.png',
    Id: 64,
    Name: 'İndirimler',
    Rank: 4,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/248789fc-09be-4fc9-a36d-dccff26f0cb8/tr/desktop/248789fc-09be-4fc9-a36d-dccff26f0cb8.png',
    Id: 65,
    Name: 'İnternet',
    Rank: 5,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/ec6007b5-7d79-4137-ab1c-0590c89468e2/tr/desktop/ec6007b5-7d79-4137-ab1c-0590c89468e2.png',
    Id: 67,
    Name: 'Keyifli Seyirler',
    Rank: 8,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/f51e60a8-297c-432d-9a32-7dc23848553e/tr/desktop/f51e60a8-297c-432d-9a32-7dc23848553e.png',
    Id: 68,
    Name: 'Ulaşım',
    Rank: 9,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/eadeac5c-a7d2-42c4-8457-ad92ca40aaa1/tr/desktop/eadeac5c-a7d2-42c4-8457-ad92ca40aaa1.png',
    Id: 69,
    Name: 'Oyun',
    Rank: 9,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/a985f850-5b55-4bc7-ba66-cce603745d92/tr/desktop/a985f850-5b55-4bc7-ba66-cce603745d92.png',
    Id: 70,
    Name: 'İletişim',
    Rank: 10,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/e76aa9b7-7d4b-4a7b-97f3-57e56858812b/tr/desktop/e76aa9b7-7d4b-4a7b-97f3-57e56858812b.png',
    Id: 71,
    Name: 'Eğlence',
    Rank: 11,
  },
  {
    IconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/tag/tr/b773e72e-1801-44f9-9c81-82756084a0a3/tr/desktop/b773e72e-1801-44f9-9c81-82756084a0a3.png',
    Id: 72,
    Name: 'Perakende',
    Rank: 12,
  },
];

const Main = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          horizontal
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View className="w-2" />}
          renderItem={({item}) => (
            <Pressable
              className={cn(
                'px-2 py-2 border-[#ECEEEF] border-[1.5px] h-11 rounded-[8px] flex-row justify-between items-center',
                {'border-[#F40000]': item.Id === 65},
              )}>
              <Image
                source={{uri: item.IconUrl}}
                className="w-7 h-7 rounded-md mr-2"
              />
              <Text className="text-[#1D1E1C]">{item.Name}</Text>
            </Pressable>
          )}
          keyExtractor={item => item.Id}
        />

        <PromotionCard />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  contentContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
  },
});

export default Main;

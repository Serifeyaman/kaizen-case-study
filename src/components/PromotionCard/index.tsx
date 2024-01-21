import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {date} from '@app/lib';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width;

const PROMOTON_DATA = [
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/brand/tr/95159ee8-048c-4e33-8148-a3d1e20bbe74/tr/desktop/95159ee8-048c-4e33-8148-a3d1e20bbe74.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #000000;">.</span></p>',
    Id: 33,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/a0274195-a556-43e2-9e96-8ff0db70f424/tr/desktop/e3015d8c-7809-4053-8e37-6d839429f9a9.jpeg',
    PromotionCardColor: '#F6BE00',
    RemainingText: '30.04.2024',
    SeoName: 'loyalty-2022',
    Title:
      '<p><span style="color: #ffffff;">Yıldızlı kapaklardaki puanları topla, kazan!</span></p>',
    ScenarioType: 'DahaPoint',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ffffff;">Kod Gir</span></p>',
    ListButtonTextBackGroudColor: '#F20000',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: null,
    LuckyDayBackgroundColor: null,
  },
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/brand/tr/95159ee8-048c-4e33-8148-a3d1e20bbe74/tr/desktop/95159ee8-048c-4e33-8148-a3d1e20bbe74.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #000000;">.</span></p>',
    Id: 116,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/fe18c393-86d2-4174-9a12-cdbb831203d8/tr/desktop/5ac651a5-2f32-43bb-9268-07373f14fde0.jpeg',
    PromotionCardColor: '#F6BE00',
    RemainingText: '30.04.2024',
    SeoName: 'q1-2024-3l-promo-card',
    Title:
      '<p><span style="color: #ffffff;">3L kapaklarında Ramazan\'a &ouml;zel hediyeler var!</span></p>',
    ScenarioType: 'DahaPoint',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ffffff;">Kod Gir</span></p>',
    ListButtonTextBackGroudColor: '#F20000',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: '',
    LuckyDayBackgroundColor: '',
  },
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/brand/tr/95159ee8-048c-4e33-8148-a3d1e20bbe74/tr/desktop/95159ee8-048c-4e33-8148-a3d1e20bbe74.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #000000;">.</span></p>',
    Id: 117,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/21066267-09e6-4ce0-a6d6-6f384fdc306a/tr/desktop/d53f40ab-f524-4660-b233-b1b55a89afbe.jpeg',
    PromotionCardColor: '#F6BE00',
    RemainingText: '30.04.2024',
    SeoName: 'ccz1l-promo-card',
    Title:
      '<p><span style="color: #ffffff;">1L Coca Cola Zero Sugar kapaklarında boş yok!</span></p>',
    ScenarioType: 'DahaPoint',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ffffff;">Kod Gir</span></p>',
    ListButtonTextBackGroudColor: '#F20000',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: '',
    LuckyDayBackgroundColor: '',
  },
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/brand/tr/2938a1bb-5188-4415-9c85-8f7214f60760/desktop/2938a1bb-5188-4415-9c85-8f7214f60760.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #ff0000;">Hemen Katıl</span></p>',
    Id: 108,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotion/tr/376a3f54-d3a8-4260-9c28-990823cb7d29/tr/desktop/16686c74-0a31-4097-acbf-e500c6e41d2b.jpeg',
    PromotionCardColor: '#F40000',
    RemainingText: '15.02.2024',
    SeoName: 'cappy-cekili-promosyonu',
    Title:
      '<p><span style="color: #ffffff;">Muhteşem Bir Tatil Ve Y&uuml;zlerce Hediye Cappy&rsquo;de</span></p>',
    ScenarioType: 'Default',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ffffff;">Hemen Katıl</span></p>',
    ListButtonTextBackGroudColor: '#ff8000',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: null,
    LuckyDayBackgroundColor: null,
  },
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/brand/tr/2938a1bb-5188-4415-9c85-8f7214f60760/desktop/2938a1bb-5188-4415-9c85-8f7214f60760.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #ff0000;">Hemen Katıl</span></p>',
    Id: 111,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/7019ffd2-7093-4267-83df-8e52024546a0/tr/desktop/a840ad8e-3c7b-47cd-a9b2-3a6d129a8d57.jpeg',
    PromotionCardColor: '#F40000',
    RemainingText: '31.01.2024',
    SeoName: 'yeil-kapaklarda-shell-yakt-puan-hediye',
    Title:
      '<p><span style="color: #000000;">Yeşil kapaklarda Shell Yakıt Puan Hediye</span></p>',
    ScenarioType: 'Default',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ffffff;">Hemen Katıl</span></p>',
    ListButtonTextBackGroudColor: '#F20000',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: null,
    LuckyDayBackgroundColor: null,
  },
  {
    BrandIconColor: '#FFFFFF',
    BrandIconUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/brand/tr/2938a1bb-5188-4415-9c85-8f7214f60760/desktop/2938a1bb-5188-4415-9c85-8f7214f60760.png',
    BrandPromotionCardParticipationText:
      '<p><span style="color: #ff0000;">Hemen Katıl</span></p>',
    Id: 96,
    ImageUrl:
      'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/15291f8b-a835-4c33-9d32-3bd68d09d740/tr/desktop/90c2b4f2-7c71-4b13-b645-df62e599c933.jpeg',
    PromotionCardColor: '#F40000',
    RemainingText: '30.04.2024',
    SeoName: 's-sport-plusta-1-3-veya-6-aylk-hediye-yelik',
    Title:
      '<p><span style="color: #ffffff;">S Sport Plus\'ta 1, 3 veya 6 aylık hediye &uuml;yelik!</span></p>',
    ScenarioType: 'Default',
    Unavailable: false,
    Unvisible: false,
    ListButtonText: '<p><span style="color: #ecf0f1;">Hemen Katıl</span></p>',
    ListButtonTextBackGroudColor: '#de3121',
    CardType: 'Default',
    ExternalUrl: '',
    IsLuckyDay: false,
    LuckyDayText: '',
    LuckyDayTextColor: null,
    LuckyDayBackgroundColor: null,
  },
];

const PaginationDot: React.FC<{
  currentIndex: number;
  currentItem: any;
  index: number;
}> = ({currentIndex, currentItem, index}) => (
  <TouchableOpacity
    style={[
      styles.paginationDot,
      currentIndex === index && {
        ...styles.paginationDotActive,
        backgroundColor: currentItem.PromotionCardColor,
      },
    ]}
    key={index}
    activeOpacity={0.7}
  />
);

const PromotionCard = () => {
  const navigation = useNavigation();
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [visibleItemData, setVisibleItemData] = useState(PROMOTON_DATA[0]);

  const onViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      if (viewableItems.length > 0 && viewableItems[0].index) {
        setVisibleItemIndex(viewableItems[0].index);
        setVisibleItemData(viewableItems[0].item);
      }
    },
    [],
  );

  return (
    <>
      <FlatList
        data={PROMOTON_DATA}
        horizontal
        className="mt-4 px-7 pb-10"
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={ITEM_WIDTH - 70 + 10}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <View className="w-[10px]" />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        scrollToOverflowEnabled={false}
        renderItem={({item, index}) => (
          <>
            <Pressable
              onPress={() => navigation.navigate('PromotionDetail')}
              className="p-1 border-[#ECEEEF] border-[2px] rounded-[16px] relative bg-white"
              style={{width: ITEM_WIDTH - 70, zIndex: 1}}>
              <View className="relative">
                <Image
                  source={{uri: item.ImageUrl}}
                  className="h-[290px] w-full bg-cover rounded-[16px] rounded-bl-[100px] relative"
                />
                <View className="w-[55px] h-[55px] absolute bottom-0 left-0 rounded-full bg-white p-1">
                  <Image
                    source={{uri: item.BrandIconUrl}}
                    className="w-full h-full cover relative"
                  />
                </View>
                <View className="px-4 py-3 absolute bottom-2 right-2 rounded-[27px] bg-[#1D1E1C] flex justify-center items-center">
                  <Text className="text-white text-[13px] font-medium">
                    son{' '}
                    <Text className="text-[15px]">
                      {date.differenceDate(item.RemainingText)}
                    </Text>{' '}
                    gün
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-center mt-4">
                <Text className="text-[#1D1E1C] text-[14px] font-bold w-[240px] py-2 text-center">
                  {item.Title}
                </Text>
              </View>
              <View className="flex-row justify-center">
                <Text
                  style={{color: item.PromotionCardColor}}
                  className="text-[14px] font-bold w-[180px] text-center my-4">
                  Daha Daha
                </Text>
              </View>
              <View
                className="h-5 rounded-b-xl rounded-bl-3xl -z-10 rotate-3 absolute"
                style={{backgroundColor: item.PromotionCardColor}}
              />
            </Pressable>
            <View
              style={{
                width: ITEM_WIDTH - 72,
                zIndex: 0,
                backgroundColor: item.PromotionCardColor,
              }}
              className="absolute -bottom-[20px] h-10 rounded-bl-[90px] rounded-br-[22px] rounded-tl-[100px] rounded-tr-[2px] rotate-[3deg]"
            />
            {index === PROMOTON_DATA.length - 1 && <View className="pr-14" />}
          </>
        )}
      />
      <View className="flex-row justify-center mt-5">
        {PROMOTON_DATA.length > 1 && (
          <View style={styles.paginationContainer}>
            {PROMOTON_DATA.map((_, i) => (
              <PaginationDot
                key={i}
                currentIndex={visibleItemIndex}
                currentItem={visibleItemData}
                index={i}
              />
            ))}
          </View>
        )}
      </View>
    </>
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
  paginationContainer: {
    flexDirection: 'row',
    padding: 3,
    borderRadius: 8,
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#D8D8D8',
  },
  paginationDotActive: {
    backgroundColor: 'black',
    width: 15,
  },
});

export default PromotionCard;

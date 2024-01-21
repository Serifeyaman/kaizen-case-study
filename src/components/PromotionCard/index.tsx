import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import RenderHTML from 'react-native-render-html';

import {date, promotionHelper} from '@app/lib';
import api from '@app/api';

type PromotionCardPropTypes = {
  activeBrandId: number | string;
};

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width;

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
        backgroundColor: currentItem?.PromotionCardColor,
      },
    ]}
    key={index}
    activeOpacity={0.7}
  />
);

const PromotionCard: React.FC<PromotionCardPropTypes> = ({activeBrandId}) => {
  const navigation = useNavigation();
  const {promotionList} = useSelector(state => state.promotion);
  const dispatch = useDispatch();
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [visibleItemData, setVisibleItemData] = useState(promotionList?.[0]);
  const filteredPromotionList = activeBrandId
    ? promotionHelper.filterByTagName(activeBrandId, promotionList)
    : promotionList;

  useEffect(() => {
    api.getPromotionList().then(res => {
      dispatch({
        type: 'GET_PROMOTION_LIST',
        promotionList: res.data,
      });
      setVisibleItemData(res.data[0]);
    });
  }, [dispatch]);

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
        data={filteredPromotionList}
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
              onPress={() =>
                navigation.navigate('PromotionDetail', {
                  SeoName: item.SeoName,
                  Id: item.Id,
                })
              }
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
                      {date?.differenceDate(item.RemainingText)}
                    </Text>{' '}
                    gün
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-center mt-4">
                <Text className="text-[#1D1E1C] text-[14px] font-bold w-[240px] py-2 text-center">
                  {item.Title}
                  {/* 
                    Burada endpointten gelen bir metin var fakat renginden dolayı görünmüyor. 
                    Eğer endpointten gelen bu metinin style doğru gelseydi aşağıdaki kod bloğu kullanılabilirdi.
                  */}
                  {/* <ScrollView style={{flex: 1}}>
                    <RenderHTML
                      contentWidth={240}
                      source={{html: item.Title}}
                    />
                  </ScrollView> */}
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
            {index === filteredPromotionList.length - 1 && (
              <View className="pr-14" />
            )}
          </>
        )}
      />
      <View className="flex-row justify-center mt-5">
        {filteredPromotionList.length > 1 && (
          <View style={styles.paginationContainer}>
            {filteredPromotionList.map((_, i) => (
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

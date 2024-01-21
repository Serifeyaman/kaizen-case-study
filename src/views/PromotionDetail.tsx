import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

import {date, navigation as navigationLib} from '@app/lib';
import api from '@app/api';
import {useDispatch, useSelector} from 'react-redux';
import RenderHTML from 'react-native-render-html';

const PromotionDetail = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {promotionDetail} = useSelector(
    (state: {promotion: any}) => state.promotion,
  );
  const dispatch = useDispatch();
  const route = useRoute();
  const {SeoName, Id} = route.params as {Id: number; SeoName: string};

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    });

    const blurListener = navigation.addListener('blur', () => {
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: navigationLib.handleTabbarAsVisible()});
    });

    return () => {
      focusListener.remove();
      blurListener.remove();
    };
  }, [navigation]);

  useEffect(() => {
    if (Id) {
      api.getPromotionDetail(Id).then(res => {
        dispatch({
          type: 'GET_PROMOTION_DETAIL',
          promotionDetail: res.data,
        });
      });
    }
  }, [Id, dispatch]);

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingBottom: insets.bottom + 15,
      }}>
      <ScrollView className="flex-1 ">
        <View className="relative">
          <Image
            source={{uri: promotionDetail.ImageUrl}}
            className="h-[355px] w-full cover rounded-bl-[100px] relative"
          />
          <View className="w-[55px] h-[55px] absolute bottom-0 left-0 rounded-full bg-white p-1">
            <Image
              source={{uri: promotionDetail.BrandIconUrl}}
              className="w-full h-full cover relative"
            />
          </View>
          <View className="px-4 py-3 absolute bottom-3 right-3 rounded-[27px] bg-[#1D1E1C] flex justify-center items-center">
            <Text className="text-white text-[13px] font-medium">
              son{' '}
              <Text className="text-[15px]">
                {date.differenceDate(promotionDetail.RemainingText)}
              </Text>{' '}
              gün
            </Text>
          </View>
        </View>
        <View className="p-4">
          <Text className="text-[26px] font-bold">
            {/* 
                TODO:
                Burada endpointten gelen bir metin var fakat renginden dolayı görünmüyor. 
                Eğer endpointten gelen bu metinin style değeri doğru gelseydi aşağıdaki kod bloğu kullanılabilirdi.
            */}
            {/* <ScrollView style={{flex: 1}}>
              <RenderHTML
                contentWidth={240}
                source={{html: promotionDetail.Title}}
               />
              </ScrollView> */}
            {promotionDetail.Title}
          </Text>
          <Text className="text-[14px] font-normal mt-4">
            <ScrollView style={{flex: 1}}>
              <RenderHTML
                contentWidth={240}
                source={{html: promotionDetail.Description}}
              />
            </ScrollView>
          </Text>
        </View>
      </ScrollView>
      <View className="bg-[#F40000] px-4 mx-4 py-4 rounded-[28px] fixed -z-10 flex justify-center items-center bottom-0">
        <Text className="text-white text-[14px] font-semibold">
          Hemen Katıl
        </Text>
      </View>
    </View>
  );
};

export default PromotionDetail;

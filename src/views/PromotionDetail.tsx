import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const PromotionDetail = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    });

    const blurListener = navigation.addListener('blur', () => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
    });

    return () => {
      focusListener.remove();
      blurListener.remove();
    };
  }, [navigation]);

  return (
    <View className="flex-1 bg-white">
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        className="h-[200px]"
      />
      <Text>PromotionDetail</Text>
    </View>
  );
};

export default PromotionDetail;

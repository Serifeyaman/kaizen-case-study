import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import cn from 'classnames';

import {Icons, PromotionCard} from '@app/components';
import {useDispatch, useSelector} from 'react-redux';
import api from '@app/api';
import {promotionHelper} from '@app/lib';

const Main = () => {
  const {tags, promotionList} = useSelector(state => state.promotion);
  const [activeBrandId, setActiveBrandId] = useState(tags?.[0]?.Id);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getTagList().then(res => {
      dispatch({
        type: 'GET_TAGS',
        tags: res.data,
      });
    });
  }, [dispatch]);
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={[
            {
              Id: 0,
              IconUrl: 'Fırsat Bul',
              Name: 'Fırsat Bul',
            },
            ...tags,
          ]}
          horizontal
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-2" />}
          renderItem={({item}) => (
            <Pressable
              onPress={() => setActiveBrandId(item.Id)}
              className={cn(
                'px-2 py-2 border-[#ECEEEF] border-[1.5px] h-11 rounded-[8px] flex-row justify-between items-center',
                {'border-[#F40000]': item.Id === activeBrandId},
              )}>
              {item.IconUrl === 'Fırsat Bul' ? (
                <Icons.Find className="w-7 h-7 mr-2" />
              ) : (
                <Image
                  source={{uri: item.IconUrl}}
                  className="w-7 h-7 rounded-md mr-2"
                />
              )}
              <Text className="text-[#1D1E1C]">{item.Name}</Text>
            </Pressable>
          )}
        />
        <PromotionCard activeBrandId={activeBrandId} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 35,
  },
  contentContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    display: 'flex',
  },
});

export default Main;

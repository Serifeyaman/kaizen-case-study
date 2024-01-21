import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Main as MainScreen,
  PromotionDetail as PromotionDetailScreen,
  Test as TestScreen,
} from '@app/views';
import {Icons} from '@app/components';
import DahaDaha from '@app/assets/images/Daha_Daha.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{header: Header}}
      />
      <Stack.Screen
        name="PromotionDetail"
        component={PromotionDetailScreen}
        options={{header: Header}}
      />
    </Stack.Navigator>
  );
};

const Header: React.FC<NativeStackHeaderProps> = ({back, navigation}) => {
  const canGoBack = !!back;
  const isFocused = navigation.isFocused();
  const insets = useSafeAreaInsets();

  const isActive = false;

  if (canGoBack && isFocused) {
    return (
      <View
        className="bg-white px-4 relative bg-transparent"
        style={{
          paddingTop: insets.top,
        }}>
        <View className="flex flex-row absolute top-10 left-5">
          <Pressable
            onPress={async () => {
              navigation.goBack();
            }}
            className="h-8 w-8 items-center justify-center">
            <Icons.Back width="40" height="40" color="#1D1E1C" />
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View
      className="bg-white px-4 pb-2"
      style={{
        paddingTop: insets.top,
      }}>
      <View className="flex flex-row items-center justify-between h-14">
        <View className="h-10 w-20 bg-white">
          <Image source={DahaDaha} className="h-full" />
        </View>
        <View className="flex flex-row">
          {isActive ? (
            <View className="w-10 h-10 bg-[#F40000] rounded-full ml-3 flex justify-center items-center relative">
              <Icons.User width="18" height="18" />
              <View className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-1" />
            </View>
          ) : (
            <>
              <View className="bg-[#F40000] rounded-[20px] flex justify-center items-center">
                <Text className="text-white font-semibold px-4">Giriş Yap</Text>
              </View>
              <View className="w-10 h-10 bg-[#1D1E1C] rounded-full ml-3 flex justify-center items-center">
                <Icons.User width="18" height="18" />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const CustomTabBarButton: React.FC<BottomTabBarButtonProps> = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-16 h-20 -mt-8 mx-1 justify-center items-cente">
      <Icons.PortalImage />
    </Pressable>
  );
};

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#1D1E1C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingTop: 4,
          paddingBottom: 20,
          height: 75,
          borderTopWidth: 0,
          shadowColor: 'gray',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        },
        tabBarLabelStyle: {fontSize: 11, fontWeight: '600'},
      })}>
      <Tab.Screen
        name="MainTab"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: (props: any) =>
            (
              <Icons.Discovery
                width="23"
                height="23"
                color={props.focused ? '#1D1E1C' : 'gray'}
                {...props}
              />
            ) as any,
          tabBarLabel: 'KEŞFET',
        }}
      />
      <Tab.Screen
        name="Test"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Test1"
        component={TestScreen}
        options={{
          tabBarIcon: (props: any) =>
            (
              <Icons.Star
                width="21"
                height="21"
                color={props.focused ? '#1D1E1C' : 'gray'}
                {...props}
              />
            ) as any,
          header: Header,
          tabBarLabel: 'DAHA CÜZDAN',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;

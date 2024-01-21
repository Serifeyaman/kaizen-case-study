import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

import {date, navigation as navigationLib} from '@app/lib';

const PROMOTION_DETAIL_DATA = {
  BrandIconColor: '#FFFFFF',
  BrandIconUrl:
    'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/brand/tr/95159ee8-048c-4e33-8148-a3d1e20bbe74/tr/desktop/95159ee8-048c-4e33-8148-a3d1e20bbe74.png',
  BrandPromotionCardParticipationText:
    '<p><span style="color: #000000;">.</span></p>',
  Description:
    '<p>Yıldızlı boş yok kapaklarının altındaki kodu gir, Ramazana &ouml;zel 1+1 men&uuml;leri kazan.&nbsp;</p>',
  EndDate: '2024-04-30T23:59:00',
  Id: 33,
  ImageUrl:
    'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotion/tr/a0274195-a556-43e2-9e96-8ff0db70f424/tr/desktop/e3015d8c-7809-4053-8e37-6d839429f9a9.jpeg',
  CountryTimeZone: 3,
  RemainingText: '30.04.2024',
  StartDate: '2022-10-03T00:00:00',
  Title:
    '<p><span style="color: #ffffff;">Yıldızlı kapaklardaki puanları topla, kazan!</span></p>',
  Type: 'Pincode',
  ScenarioType: 'DahaPoint',
  SeoName: 'loyalty-2022',
  Unavailable: false,
  IsMapAvailable: false,
  Unvisible: false,
  DetailButtonText: 'Kod Gir',
  ListButtonText: null,
  LuckyDayText: '',
  LuckyDayTextColor: null,
  LuckyDayBackgroundColor: null,
  PromotionDetailItemAreas: [
    {
      Title: 'Ne kazanabilirim?',
      Description:
        '<p>Ramazana &ouml;zel 1+1 men&uuml;ler ve y&uuml;z binlerce hediye.</p>',
      OpenedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/6d7064af-a737-48cd-a945-dae4136ee11d/tr/desktop/6d7064af-a737-48cd-a945-dae4136ee11d.png',
      ClosedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/fdd1849a-0eb3-49cc-8d64-1a7d2ba343bf/tr/desktop/fdd1849a-0eb3-49cc-8d64-1a7d2ba343bf.png',
      UseMapButton: false,
      PromotionDetailItems: [
        {
          Title: 'İletişim',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/8f03faaf-e9e4-45be-84e0-dff68900bacb/tr/desktop/8f03faaf-e9e4-45be-84e0-dff68900bacb.png',
        },
        {
          Title: 'Eğlence',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/c25a18c8-110f-4832-aa3e-a1a1ba05524c/tr/desktop/c25a18c8-110f-4832-aa3e-a1a1ba05524c.png',
        },
        {
          Title: 'Oyun',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/92554a1b-a8da-44cd-96b9-c92c4d4ba3f7/tr/desktop/92554a1b-a8da-44cd-96b9-c92c4d4ba3f7.png',
        },
        {
          Title: 'Yemek',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/42117569-0556-4b33-8d46-62fdbb310e3b/tr/desktop/facee2a6-2d80-4005-a57b-e71909c18df3.png',
        },
        {
          Title: 'Perakende',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/eeb77cd5-42d8-4e9a-8456-acc31a6190de/tr/desktop/eeb77cd5-42d8-4e9a-8456-acc31a6190de.png',
        },
        {
          Title: 'Hizmet',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/61dd7207-deb7-45da-b2f5-76b87e95717d/tr/desktop/61dd7207-deb7-45da-b2f5-76b87e95717d.png',
        },
        {
          Title: 'Ulaşım',
          Description: '-',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/f9dacfc0-6310-4b9c-aebe-33f7e8801a80/tr/desktop/f9dacfc0-6310-4b9c-aebe-33f7e8801a80.png',
        },
      ],
    },
    {
      Title: 'Nasıl katılabilirim?',
      Description:
        '<p>2.5L kapaklarının altında yer alan kodu ilgili alana girdikten sonra elde edeceğiniz puanlarla hediye havuzundan dilediğiniz hediyeyi se&ccedil;ebilirsiniz.&nbsp;</p>',
      OpenedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/168ac0a3-e818-4641-ae7c-13ec95170781/tr/desktop/168ac0a3-e818-4641-ae7c-13ec95170781.png',
      ClosedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/705d592e-2f03-4258-9fac-7f667aa70550/tr/desktop/705d592e-2f03-4258-9fac-7f667aa70550.png',
      UseMapButton: false,
      PromotionDetailItems: [],
    },
    {
      Title: 'Ne satın almalıyım?',
      Description:
        '<p>2.5 Litre Coca-Cola Orijinal Tat, 2.5 Litre Coca-Cola Zero Sugar, 2.5 Litre Fanta, 2.5 Litre Sprite.</p>',
      OpenedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/1e2ebf87-4be4-420d-9458-275f9064f414/tr/desktop/1e2ebf87-4be4-420d-9458-275f9064f414.png',
      ClosedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/64b2e093-1ea8-4728-a338-5d62b987d890/tr/desktop/64b2e093-1ea8-4728-a338-5d62b987d890.png',
      UseMapButton: false,
      PromotionDetailItems: [
        {
          Title: 'Coca-Cola Orijinal Tat Daha Az Kalorili 2.5L',
          Description: '150 Daha Puan',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotiondetailitems/tr/0e59acb0-7e26-48bb-b2d1-da8a63282040/tr/desktop/e8942c58-a898-43d9-8218-d639030547b2.jpeg',
        },
        {
          Title: 'Coca-Cola Zero Sugar 2.5L',
          Description: '150 Daha Puan',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotiondetailitems/tr/914096cf-99e6-4e47-b728-2b26760636a6/tr/desktop/99558653-5615-473d-b3e7-1166cf85244f.jpeg',
        },
        {
          Title: 'Sprite 2.5L',
          Description: '150 Daha Puan',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotiondetailitems/tr/6c25be82-b83b-4b17-99a1-77cdae0a34b4/tr/desktop/ea5e3fdc-9d64-40e9-8297-848240604ca7.jpeg',
        },
        {
          Title: 'Fanta 2.5L',
          Description: '150 Daha Puan',
          ImageUrl:
            'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotiondetailitems/tr/46131bb5-2e30-4a08-a675-0168acb2a3b8/tr/desktop/96f5f20c-7d11-430d-8a28-b36201f6f49a.jpeg',
        },
      ],
    },
    {
      Title: 'Nereden satın alabilirim?',
      Description:
        '<p>Evine en yakın anlaşmalı satış noktasından promosyonlu &uuml;r&uuml;nlerimizi satın alabilirsin.</p>',
      OpenedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/212fe882-3ae4-4993-9c00-06ddd08dc0d0/tr/desktop/212fe882-3ae4-4993-9c00-06ddd08dc0d0.png',
      ClosedIconUrl:
        'https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/promotiondetailitems/tr/16b935f1-2c9c-47fd-b210-c7a8acf1b631/tr/desktop/16b935f1-2c9c-47fd-b210-c7a8acf1b631.png',
      UseMapButton: false,
      PromotionDetailItems: [],
    },
  ],
  Contents: [],
  PromotionTags: [],
  PromotionGalleries: [
    {
      DocumentUrl:
        'https://prod-extrazone-document-bucket.s3.eu-west-1.amazonaws.com/promotiondetailitems/tr/abce1f94-2e46-4bda-9e34-90a9a018b44b/tr/desktop/5243af0b-7844-4003-829e-ab4a34e24b3a.jpeg',
      DocumentType: 'Image',
      CoverImageUrl: '',
    },
  ],
  NextFlowConfigurations: {},
  GameWin: null,
};

const PromotionDetail = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

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

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingBottom: insets.bottom + 15,
      }}>
      <ScrollView className="flex-1 ">
        <View className="relative">
          <Image
            source={{uri: PROMOTION_DETAIL_DATA.ImageUrl}}
            className="h-[355px] w-full cover rounded-bl-[100px] relative"
          />
          <View className="w-[55px] h-[55px] absolute bottom-0 left-0 rounded-full bg-white p-1">
            <Image
              source={{uri: PROMOTION_DETAIL_DATA.BrandIconUrl}}
              className="w-full h-full cover relative"
            />
          </View>
          <View className="px-4 py-3 absolute bottom-3 right-3 rounded-[27px] bg-[#1D1E1C] flex justify-center items-center">
            <Text className="text-white text-[13px] font-medium">
              son{' '}
              <Text className="text-[15px]">
                {date.differenceDate(PROMOTION_DETAIL_DATA.RemainingText)}
              </Text>{' '}
              gün
            </Text>
          </View>
        </View>
        <View className="p-4">
          <Text className="text-[26px] font-bold">
            {PROMOTION_DETAIL_DATA.Title}
          </Text>
          <Text className="text-[14px] font-normal mt-4">
            Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya
            getirir. Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca
            Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer
            alır. Yeni tatlara açık olanların beğenisini kazanan kahveli
            Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve
            tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak
            ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer
            almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber
            içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki
            gösterir. Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir
            araya getirir. Brezilya kahve çekirdeklerinin lezzetiyle aromalanan
            Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda
            yer alır. Yeni tatlara açık olanların beğenisini kazanan kahveli
            Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve
            tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak
            ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer
            almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber
            içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki
            gösterir. Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla
            taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda
            tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları
            arasında yer almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla
            beraber içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki
            gösterir. Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir
            araya getirir. Brezilya kahve çekirdeklerinin lezzetiyle aromalanan
            Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda
            yer alır. Yeni tatlara açık olanların beğenisini kazanan kahveli
            Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve
            tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak
            ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer
            almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber
            içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki
            gösterir.
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

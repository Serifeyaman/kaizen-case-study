import type {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  ['PromotionDetail']: {
    SeoName: string;
    Id: number;
  };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

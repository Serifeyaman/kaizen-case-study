import type {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  ['PromotionDetail']: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

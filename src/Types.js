/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/17
 *
 */

import { Animated } from "react-native";

export type LargeListDataType = { items: any[] }[];

export interface IndexPath {
  section: number,
  row: number
}

export interface Offset {
  x: number,
  y: number
}

export interface LargeListPropType {
  data: LargeListDataType,
  heightForSection?: (section: number) => number,
  renderSection?: (section: number) => React.Node<any>,
  heightForIndexPath: (indexPath: IndexPath) => number,
  renderIndexPath: (indexPath: IndexPath) => React.Node<any>,
  renderHeader?: () => React.ReactElement<any>,
  renderFooter?: () => React.ReactElement<any>,
  onNativeContentOffsetExtract?: {
    x: Animated.Value,
    y: Animated.Value
  },
  inverted?: boolean;

  groupCount?: number,
  groupMinHeight?: number,
  updateTimeInterval?: number
}

export interface GroupPropType {
  indexes: IndexPath[],
  criticalPoint: number[],
  input: number[],
  output: number[],
  data: LargeListDataType,
  heightForSection?: (section: number) => number,
  heightForIndexPath: (indexPath: IndexPath) => number,
  renderSection?: (section: number) => React.Node<any>,
  renderIndexPath: (indexPath: IndexPath) => React.Node<any>,
  offset?: number,
  inverted?: boolean;
  updateTimeInterval: number
}

export interface SectionPropType {
  tops: number[],
  section: number,
  nativeOffset: Animated.Value,
  heightForSection: (section: number) => number,
  renderSection?: (section: number) => React.Node<any>,
  input: number[],
  output: number[],
  sectionIndexes: number[],
  offset: number,
  inverted?: boolean;
  data: LargeListDataType
}

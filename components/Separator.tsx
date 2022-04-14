import React from 'react';
import { View } from 'react-native';

interface SeparatorParams {
  height: number;
  width?: number;
  extraProps?: any;
}

/**Separator component can be used to separate the statusbar from the body */
const Separator = (props: SeparatorParams) => <View style={props} />;

Separator.defaultProps = {
  height: 0,
  width: 0,
};

export default Separator;

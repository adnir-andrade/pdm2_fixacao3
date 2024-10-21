import { View, Text as ReactText } from 'react-native';
import Title from './Title';
import React from 'react';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return (
    <View>
      <ReactText>{children}</ReactText>
    </View>
  );
}

Text.Title = Title;

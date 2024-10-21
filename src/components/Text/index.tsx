import { View, Text as ReactText } from 'react-native';
import Title from './Title';
import React from 'react';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return (
    <View>
      <ReactText className='text-themys-soft-peach font-cinzel-medium text-lg'>
        {children}
      </ReactText>
    </View>
  );
}

Text.Title = Title;

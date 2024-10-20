import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <View className='flex-1 items-center justify-center bg-yellow-400'>
      {children}
    </View>
  );
}

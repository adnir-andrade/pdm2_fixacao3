import { View } from 'react-native';
import React, { ReactNode } from 'react';
import DecorativeLine from '../../DecoraviteLine';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <View className='flex justify-center items-center'>
      <DecorativeLine />
      <View className='w-248 h-48 shadow-basic bg-themys-dune rounded-lg border-l border-r border-b-2 border-themys-cod-gray/60 justify-center items-center'>
        <>{children}</>
      </View>
    </View>
  );
}

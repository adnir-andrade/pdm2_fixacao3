import { View } from 'react-native';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <View className='flex px-12'>
      <View className='w-full h-5/6 py-7 px-8 bg-themys-dune rounded-lg border border-themys-straw'>
        <>{children}</>
      </View>
    </View>
  );
}

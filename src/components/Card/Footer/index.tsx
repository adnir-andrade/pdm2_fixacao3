import { View } from 'react-native';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <>
      <View className='w-full h-12 bg-themys-tussock rounded-lg border border-themys-cod-gray/60 items-center'>
        <>{children}</>
      </View>
    </>
  );
}

import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <>
      <View className='w-full bg-themys-tussock rounded-lg border border-themys-cod-gray/60 justify-center items-center'>
        <>{children}</>
      </View>
    </>
  );
}

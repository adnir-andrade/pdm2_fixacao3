import React from 'react';
import Card from '../Card';
import Text from '../Text';
import { View } from 'react-native';

type HeaderLabelProps = {
  title: string;
  spacing: string;
};

export default function HeaderLabel({ title, spacing }: HeaderLabelProps) {
  return (
    <View className={`${spacing}`}>
      <Card.Header>
        <Text.Title>{title}</Text.Title>
      </Card.Header>
    </View>
  );
}

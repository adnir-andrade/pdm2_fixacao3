import { FlatList, View } from 'react-native';
import Text from '../components/Text';
import React, { useState } from 'react';
import Card from '../components/Card';
import users from '../mocks/MOCK_DATA';
import Divider from '../components/Divider';
import PressableItem from '../components/PressableItem';
import HeaderLabel from '../components/HeaderLabel';
import Footer from '../components/Footer';
import UserList from '../components/UserList';
import useUser from '../states/useUser';

export default function Index() {
  const { username } = useUser();

  return (
    <>
      <View className='flex-1 pt-36 bg-slate-900'>
        <HeaderLabel title={username} spacing='mb-8' />
        <Card.Body>
          <UserList />
        </Card.Body>
        <Footer />
      </View>
    </>
  );
}

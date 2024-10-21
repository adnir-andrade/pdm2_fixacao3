import { View } from 'react-native';
import React from 'react';
import Card from '../components/Card';
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

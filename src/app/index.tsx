import { View } from 'react-native';
import React, { useState } from 'react';
import Card from '../components/Card';
import HeaderLabel from '../components/HeaderLabel';
import Footer from '../components/Footer';
import UserList from '../components/UserList';
import useUser from '../states/useUser';
import Button from '../components/Button';
import Icon from 'react-native-ico-rpg-game';

export default function Index() {
  const { username } = useUser();

  const iconsName = [
    'bleeding-eye',
    'arson',
    'butterfly',
    'candle-fire',
    'cat',
    'clover',
    'crowned-heart',
    'dragon-wing',
    'octopus',
  ];

  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const buttonFunction = () => {
    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconsName.length);
  };

  return (
    <>
      <View className='flex-1 pt-36 bg-slate-900'>
        <View className='self-center items-center justify-center mb-4 rounded-full bg-yellow-500 w-14 h-14 border-2 border-themys-straw'>
          <Icon name={iconsName[currentIconIndex]} height='40' width='40' />
        </View>
        <HeaderLabel title={username} spacing='mb-8' />

        <Card.Body>
          <UserList />
          <View className='flex w-full mt-12 self-center bg-themys-tussock/70 rounded-lg justify-center items-center'>
            <Button title='Change Icon' onPress={buttonFunction} />
          </View>
        </Card.Body>
        <Footer />
      </View>
    </>
  );
}

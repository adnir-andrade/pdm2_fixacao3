import { FlatList, View } from 'react-native';
import Text from '../components/Text';
import React, { useState } from 'react';
import Card from '../components/Card';
import users from '../mocks/MOCK_DATA';
import Divider from '../components/Divider';
import PressableItem from '../components/PressableItem';
import HeaderLabel from '../components/HeaderLabel';
import Footer from '../components/Footer';

export default function Index() {
  const [activeUser, setActiveUser] = useState('Select User');

  return (
    <>
      <View className='flex-1 pt-36 bg-slate-900'>
        <HeaderLabel title={activeUser} spacing='mb-8' />
        <Card.Body>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <PressableItem
                text={item.username}
                onPress={() => setActiveUser(item.name)}
              />
            )}
            keyExtractor={(user) => user.id.toString()}
            ItemSeparatorComponent={() => <Divider />}
          ></FlatList>
        </Card.Body>
        <Footer />
      </View>
    </>
  );
}

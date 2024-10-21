import { FlatList, View } from 'react-native';
import Text from '../components/Text';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import users from '../mocks/MOCK_DATA';
import Divider from '../components/Divider';
import PressableItem from '../components/PressableItem';

export default function Index() {
  const [activeUser, setActiveUser] = useState('Select User');

  return (
    <>
      <View className='pt-36 bg-slate-900'>
        <View className='mb-12'>
          <Card.Header>
            <Text.Title>{activeUser}</Text.Title>
          </Card.Header>
        </View>
        <Card.Body>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <View className='flex flex-col space-y-4'>
                <PressableItem
                  text={item.username}
                  onPress={() => setActiveUser(item.name)}
                />
                <Divider />
              </View>
            )}
            keyExtractor={(user) => user.id.toString()}
          ></FlatList>
        </Card.Body>
        <Card.Footer>
          <Text>Developed by Adnir Andrade</Text>
        </Card.Footer>
      </View>
    </>
  );
}

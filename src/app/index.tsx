import { FlatList, View } from 'react-native';
import Text from '../components/Text';
import React from 'react';
import Card from '../components/Card';
import users from '../mocks/MOCK_DATA';

export default function Index() {
  return (
    <>
      <View className='pt-36 bg-slate-900'>
        <View className='mb-12'>
          <Card.Header>
            <Text.Title>Username</Text.Title>
          </Card.Header>
        </View>
        <Card.Body>
          <FlatList
            data={users}
            renderItem={({ item }) => <Text>{item.username}</Text>}
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

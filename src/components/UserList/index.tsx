import { FlatList } from 'react-native';
import React from 'react';
import PressableItem from '../PressableItem';
import users from '../../mocks/MOCK_DATA';
import Divider from '../Divider';
import useUser from '../../states/useUser';

export default function UserList() {
  const { changeActiveUser } = useUser();

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <PressableItem
          text={item.username}
          onPress={() => changeActiveUser(item.name)}
        />
      )}
      keyExtractor={(user) => user.id.toString()}
      ItemSeparatorComponent={() => <Divider />}
    ></FlatList>
  );
}

import { create } from 'zustand';

type State = {
  username: string;
};

type Actions = {
  changeActiveUser: (newUsername: string) => void;
  clear: () => void;
};

const useUser = create<State & Actions>()((set) => ({
  username: '',
  changeActiveUser: (newUsername: string) => {
    set({ username: newUsername });
  },
  clear: () => {
    set(() => ({
      username: '',
    }));
  },
}));

export default useUser;

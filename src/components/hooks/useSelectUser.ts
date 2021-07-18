import { useState,useCallback } from 'react';
import { User } from "../../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}


export const useSelectUser = () => {
  /**
   * クリックしたカードが持つユーザー情報を保持する
   * ＜ データの流れ ＞
   * カード -> カスタムフック(userManagement.tsx) -> モーダル
   */
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  /**
   * ユーザーを特定する
   * 必要な情報は、IDとその他ユーザー情報
   */
  const onSelectUser = useCallback((props: Props) => {
    const {id, users, onOpen} = props;
    
    const targetUser = users.find(user => user.id === id);
    setSelectedUser(targetUser ?? null); // target ?? null でundefinedの時はnullを返す、というやり方もある
    onOpen();
  },[]);

  return { onSelectUser, selectedUser }
}
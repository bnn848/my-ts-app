import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo,VFC, useEffect, useCallback } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../hooks/useAllUsers";
import { useSelectUser } from "../hooks/useSelectUser";
import { useLoginUser } from '../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  /**
   * useDisclosure(Chakra-UIに用意されている)
   * モーダル操作に必要なメソッドをimportしたので、分割してPropsとして子コンポーネントに渡す
   * isOpenは開いているかどうかのフラグ
   * onOpenはカードをクリックした際にモーダルを開く関数
   * onCloseは閉じているかどうかのフラグ
  */
  const {isOpen, onOpen, onClose} = useDisclosure();

  /**
   * カスタムフックとして切り出したuseAllUsersをimportしたので、分割して利用する
   */
  const {getUsers, users, loading} = useAllUsers();
  
  /**
   * カスタムフックとして切り出したuseSelectedUserをimportしたので、分割して利用する
  */
  const { onSelectUser, selectedUser } = useSelectUser();

  /**
   * ログイン画面からログイン情報を保持する
   */
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  
  // 初期マウント時のみ、ユーザー取得を実行
  useEffect(() => getUsers(),[getUsers]);
  
  /**
   * カードをクリックしたら編集画面をモーダルウィンドウで表示する
   * UserCard.tsxのboxにPropsとして渡す
   * 毎回再作成するのはレンダリング負荷がかかるため、useCallbackでメモ化する
   * クリックしたカード情報をモーダルに渡して編集可能にする -> user.idで特定してJSONから取得する
   */
  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  },[users, onSelectUser, onOpen]); // 使う変数は依存関係に置く
  
  return (
    <>
    {loading ? (
      <Center h="100vh">
          <Spinner />
      </Center>
    ) : (
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        {users.map((user) => (
          <WrapItem key={user.id}>
            <UserCard
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
    )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
});
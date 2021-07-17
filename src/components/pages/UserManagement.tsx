import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo,VFC, useEffect } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const {getUsers, users, loading} = useAllUsers();

  // 初期マウント時のみ、ユーザー取得を実行
  useEffect(() => getUsers(),[getUsers]);
  
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
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
            />
          </WrapItem>
        ))}
      </Wrap>
    )}
    </>
  )
});
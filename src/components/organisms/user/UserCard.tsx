import { memo,VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react"

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
  const {imageUrl, userName, fullName, onClick, id } = props;
  
  return (
    <Box 
    w="260px"
    h="260px"
    backgroundColor="white"
    borderRadius="10px"
    shadow="md"
    p={4}
    _hover={{ cursor: "pointer", opacity: 0.8}}
    onClick={() => onClick(id)}
  >
    <Stack textAlign="center">
      <Image 
        boxSize="160px"
        borderRadius="full"
        src={imageUrl}
        alt={userName}
        mx="auto"
      />
      <Text fontSize="lg" fontWeight="bold">{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  )
});
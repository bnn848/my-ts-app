import { memo,VFC } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack } from "@chakra-ui/react"

import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={user?.username} isReadOnly />
            </FormControl>

{/* ↓は遊びです */}
            <RadioGroup defaultValue="one" colorScheme="pink">
              <Stack direction="row">
                <Radio value="one">One</Radio>
                <Radio value="two">Two</Radio>
                <Radio value="three">Three</Radio>
              </Stack>
            </RadioGroup>

            <Slider defaultValue={30} colorScheme="green">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
{/* ↑は遊びです */}
            
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
  </Modal>
  )
});
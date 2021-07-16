import { memo,VFC } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting} = props;
  
  return (
      <Drawer placement="right" size="xs" isOpen={isOpen} onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100" >
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
});
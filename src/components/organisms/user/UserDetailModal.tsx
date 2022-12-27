import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from "@chakra-ui/react";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { user } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
type Props = {
  user: user | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);
  const onClickUpdate = () => alert();
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  onChange={onChangeUserName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAil</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

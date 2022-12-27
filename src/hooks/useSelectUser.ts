import { useCallback, useState } from "react";
import { user } from "../types/api/user";
type Props = {
  id: number;
  users: Array<user>;
  onOpen: () => void;
};
//選択したユーザー情報を特定してモーダルを表示
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<user | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};

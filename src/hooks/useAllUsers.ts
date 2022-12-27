/* eslint-disable react-hooks/exhaustive-deps*/

import { useCallback, useState } from "react";
import axios from "axios";
import { user } from "../types/api/user";
import { useMessage } from "./useMessage";
export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<user>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<user>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({
          title: "ユーザー情報取得に失敗しました",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, users, loading };
};

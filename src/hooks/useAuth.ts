import { useCallback, useState } from "react";
import axios from "axios";
import { user } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";
export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUSer } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUSer({ ...res.data, isAdmin });
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            setLoading(false);
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUSer]
  );
  return { login, loading };
};

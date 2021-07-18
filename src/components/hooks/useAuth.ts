import { useCallback, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

import { User } from '../../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

/**ログイン機能をカスタムフックとして実装 */
export const useAuth = () => {
  const history = useHistory();
  const {showMessage} = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();
  
  const login = useCallback((id: string) => {
    setLoading(true);
    
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data);
          showMessage({ title: "ログインしました", status: "success"})
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error"})
        }
      })
      .catch(() => showMessage({ title: "ログインできません", status: "error"}))
      .finally(() => setLoading(false));
  },[history, showMessage, setLoginUser]);

  return {login, loading, showMessage};
}
import { useSelector } from 'react-redux';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userName = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
};

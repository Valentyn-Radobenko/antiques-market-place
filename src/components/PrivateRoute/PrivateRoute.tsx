import { Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { SavingState } from '../../store/store';
// import { setAuthMode } from '../../store/slices/authModeSlice';

const PrivateRoute = () => {
  // const token = useSelector((state: SavingState) => state.auth.token);
  // const dispatch = useDispatch();

  // if (!token) {
  //   dispatch(setAuthMode('login'));
  //   return <Navigate to="/" />;
  // }

  return <Outlet />;
};

export default PrivateRoute;

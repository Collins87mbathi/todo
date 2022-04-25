import React from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { toggleTheme } from './redux/slices/themeSlice';
import { loginUser, logoutUser } from './redux/slices/userSlice';

function App() {
  const {
    user: { user },
    root: {
      theme: { currentTheme }
    }
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log(user);
  const logout = (e: React.MouseEvent) => {
    dispatch(logoutUser());
  };
  const login = (e: React.MouseEvent) => {
    dispatch(loginUser());
  };
  return (
    <div className='App'>
      <div>
        Theme is{' '}
        <button
          className='button'
          onClick={(e) => {
            dispatch(toggleTheme());
          }}
          style={
            currentTheme.dark
              ? { color: 'white', backgroundColor: 'black' }
              : { backgroundColor: 'white', color: 'black' }
          }
        >
          {currentTheme ? 'Dark' : 'Light'}
        </button>
      </div>
      {user.isAuthenticated ? (
        <div className='user'>
          <h1>Welcome {user.username}</h1>
          <p>You role is {user.role}</p>
          <button className='logout' onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className='user'>
          <h1>Welcome Anonymous</h1>
          <button className='login' onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

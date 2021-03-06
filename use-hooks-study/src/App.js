import React, { useState } from 'react';
import './App.css';
import Page from './component/useContext/Page';
import Calulator from './component/useMemo';
import {ThemeContext} from './context/ThemeContext';
import { UserContext } from './context/UserContext';


function App() {
  const [isDark, setIsDark] = useState(false);

  const handleSetIsDark = () => {
    setIsDark(!isDark);
  }
  
  return (
    <>
      <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{isDark, handleSetIsDark}}>
          <Page/>
        </ThemeContext.Provider>
      </UserContext.Provider>

      <Calulator />
    </>
  );
}

export default App;

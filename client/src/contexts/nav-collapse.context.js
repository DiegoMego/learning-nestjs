import { createContext, useState } from 'react';
export const NavCollapseContext = createContext();

function NavCollapseProvider({children}) {
  const [collapse, setCollapse] = useState(false);

  return(
    <NavCollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </NavCollapseContext.Provider>
  );
}

export { NavCollapseProvider };
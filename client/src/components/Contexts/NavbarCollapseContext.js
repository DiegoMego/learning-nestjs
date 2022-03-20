import { createContext, useState } from 'react';
export const NavbarCollapseContext = createContext();

function NavbarCollapseProvider({children}) {
    const [collapse, setCollapse] = useState(false);

    return(
        <NavbarCollapseContext.Provider value={{ collapse, setCollapse }}>
            {children}
        </NavbarCollapseContext.Provider>
    );
}

export { NavbarCollapseProvider };
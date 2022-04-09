import React, {
  createContext,
  useState,
  useMemo,
} from 'react';

const initialSetCollapse: React.Dispatch<React.SetStateAction<boolean>> = () => undefined;

export const NavCollapseContext = createContext(
  {
    collapse: false,
    setCollapse: initialSetCollapse,
  },
);

function NavCollapseProvider({ children }: React.PropsWithChildren<any>) {
  const [collapse, setCollapse] = useState(false);
  const collapser = useMemo(() => ({ collapse, setCollapse }), []);

  return (
    <NavCollapseContext.Provider value={collapser}>
      {children}
    </NavCollapseContext.Provider>
  );
}

export { NavCollapseProvider };

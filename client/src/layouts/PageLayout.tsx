import React from 'react';

function PageLayout({ children }: React.PropsWithChildren<any>) {
  return (
    <div className="page-layout">
      {children}
    </div>
  );
}

export default PageLayout;

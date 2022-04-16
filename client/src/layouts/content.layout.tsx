import React from 'react';

type Props = {
  children: React.ReactNode,
  title?: string,
}

export default function ContentLayout({ children, title }: Props) {
  return (
    <div className="page-layout">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

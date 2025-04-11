import React from 'react';

export default function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <main className='container-box'>{children}</main>
    </>
  )
}

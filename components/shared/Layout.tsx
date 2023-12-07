import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background?: String;
}) => {
  return (
    <div className={`${background}`}>
      <div className="relative overflow-x-hidden h-full w-full">
        {/* <Navigation /> */}
        <div className="px-2 lg:px-12 ">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

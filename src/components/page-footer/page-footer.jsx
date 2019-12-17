import React from 'react';
import Logo from "~/components/logo/logo";


const PageFooter = () => {
  return (
    <footer className="page-footer">

      <Logo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default PageFooter;

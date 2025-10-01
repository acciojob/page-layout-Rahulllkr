import React from "react";

const PageLayout = ({ header, children, footer }) => {
  return (
    <div>
        {header}
        {children}
        {footer}
    </div>
  );
};

export default PageLayout;

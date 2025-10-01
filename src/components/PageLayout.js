import React from "react";
// import { divide } from "cypress/types/lodash";

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

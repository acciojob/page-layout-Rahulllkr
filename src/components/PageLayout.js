import React from "react";
// import { divide } from "cypress/types/lodash";

const PageLayout = ({ header, children, footer }) => {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;

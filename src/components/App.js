import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <>
        {/* Do not remove the main div */}
        <PageLayout
          header={<h1>Welcome to my website</h1>}
          footer={<p>© 2023 My Website. All rights reserved.</p>} // <-- Fixed spacing
        >
          <p>This is the Content of my website.</p>
        </PageLayout>
    </>
  );
}

export default App;

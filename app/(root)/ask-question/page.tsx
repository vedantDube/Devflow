import React from "react";

const page = () => {
  const isUserLoggedIn = false;
  if (!isUserLoggedIn) {
    return <div>Sign In</div>;
  }
  return <div>Ask Question</div>;
};

export default page;

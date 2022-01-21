import React from "react";

const WelcomePage = () => {
  return (
    <div className={'container'}>
      <h1>Welcome to Bookmark App</h1>
      <p><a href={'/login'}>Login Here</a></p>
      <p><a href={'/register'}>Register Here</a></p>
    </div>
  )
}

export default WelcomePage;

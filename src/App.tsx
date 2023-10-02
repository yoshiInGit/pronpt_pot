import React from "react";
import HomePage from "./view/HomePage"
import MyPage from "./view/MyPage"
import PostPage from "./view/PostPage"
import PromptPage from "./view/PromptPage"
import ErrorBoundary from "./ErrorBoundary";



function App() {
  return (
    <>
    <ErrorBoundary>
      <HomePage/>
    </ErrorBoundary>
    </>
  )
}

export default App


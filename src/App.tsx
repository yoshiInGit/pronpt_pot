import React from "react";
import HomePage from "./view/HomePage"
import MyPage from "./view/MyPage"
import PostPage from "./view/PostPage"
import PromptPage from "./view/PromptPage"
import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/prompt" element={<PromptPage/>}>
          <Route path=":promptId" element={<PromptPage/>}/>
        </Route>
      </Routes>
    </ErrorBoundary>
    </>
  )
}

export default App


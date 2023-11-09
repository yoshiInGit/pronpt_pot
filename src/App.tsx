import HomePage from "./view/pages/HomePage"
import PostPage from "./view/pages/PostPage"
import PromptPage from "./view/pages/PromptPage"
import ErrorBoundary from "./ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import UserPage from "./view/pages/UserPage";



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
        <Route path="/user" element={<UserPage/>}>
          <Route path=":userId" element={<UserPage/>}/>
        </Route>
      </Routes>
    </ErrorBoundary>
    </>
  )
}

export default App


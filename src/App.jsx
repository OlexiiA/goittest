import { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { Tweets } from "./pages/Tweets/Tweets"

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense >
    </>
  )
}

export default App

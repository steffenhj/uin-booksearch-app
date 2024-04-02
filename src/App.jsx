import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Searchresults from "./components/Searchresults"

import "./styles/main.css";

export default function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Searchresults />} />
              {/* <Route path="/search" element={<SearchResults/>} /> */}
          </Routes>
      </Layout>
  )
}
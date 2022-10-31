import { BrowserRouter, Route, Routes } from "react-router-dom"
import Entry from "./components/Entry.jsx"
import Item from "./components/Item.jsx"
import { EstateProvider } from "./context/EstateProvider.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import Estate from "./pages/Estate.jsx"
import Home from "./pages/Home.jsx"
import Us from "./pages/Us.jsx"

function App() {

  return (
    <BrowserRouter>
      <EstateProvider>
        <Routes>
          
          <Route path="/" index element={<Home/>} />
          <Route path="/estate" element={<Estate/>} />
          <Route path="/estate/:id" element={<Item/>} />
          <Route path="/us" element={<Us/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<Entry/>} />

        </Routes>
      </EstateProvider>
    </BrowserRouter>
  )
}

export default App

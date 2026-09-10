import { Outlet } from "react-router"
import Header from "../../components/Header/Header.jsx"
import Navbar from "../../components/Header/Navbar.jsx"
import BreakingNews from "../../components/BreakingNews/BreakingNews.jsx"

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      <BreakingNews />
      <Navbar />
      <main className="py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Root

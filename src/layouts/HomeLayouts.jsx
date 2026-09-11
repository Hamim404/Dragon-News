import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import BreakingNews from "../components/BreakingNews/BreakingNews.jsx";
import CategorySidebar from "../components/CategorySidebar/CategorySidebar.jsx";
import RightSidebar from "../components/RightSidebar/RightSidebar.jsx";
import Loading from "../components/Loading/Loading.jsx";

const HomeLayouts = () => {
  const { state } = useNavigation();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      {import.meta.env.VITE_KEY}
      <BreakingNews />
      <Navbar />
      <main className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: categories */}
          <div className="lg:col-span-3">
            <CategorySidebar />
          </div>

          {/* Center: news feed */}
          <div className="lg:col-span-6">
            {state == "loading" ? <Loading /> : <Outlet></Outlet>}
          </div>

          {/* Right: login / socials / q-zone */}
          <div className="lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeLayouts;

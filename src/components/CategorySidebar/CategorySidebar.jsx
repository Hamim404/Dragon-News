import { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const CategorySidebar = () => {
  const data = use(categoryPromise);
  return (
    <aside>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        All Category ({data.length})
      </h2>

      <ul className="space-y-1">
        <li>
          {data.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `block text-center py-3 rounded-sm font-medium transition ${
                  isActive
                    ? "bg-brand bg-gray-300 font-bold" // 👈 Styles when active (change to your liking)
                    : "hover:bg-gray-200 text-gray-900" // 👈 Styles when not active
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </li>
      </ul>

      {/* trending cards below the category list, matching the layout */}
      {/* <div className="mt-8 space-y-8">
        {trending.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.img || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-40 object-cover rounded-sm"
            />
            <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug">
              {item.title}
            </h3>
            <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
              <span>{item.tag}</span>
              <span className="flex items-center gap-1">📅 {item.date}</span>
            </div>
          </div>
        ))}
      </div> */}
    </aside>
  );
};

export default CategorySidebar;

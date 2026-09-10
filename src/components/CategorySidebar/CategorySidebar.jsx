import { NavLink, useLoaderData } from "react-router";

const CategorySidebar = () => {
  const data = useLoaderData();

  return (
    <aside>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">All Caterogy</h2>

      <ul className="space-y-1">
        <li>
          {data.map((category) => (
            <NavLink
              key={category.id}
              className="block text-center py-3 rounded-sm font-medium transition ${
                isActive hover:bg-gray-200 text-gray-900"
              to={`/category/${category.id}`}
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

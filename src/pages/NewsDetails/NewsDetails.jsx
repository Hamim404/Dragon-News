import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import RightSidebar from "../../components/RightSidebar/RightSidebar.jsx"

const editorsInsight = [
  { title: "21 The Most Stylish Wedding Guest Dresses For Spring", date: "Jan 4, 2022" },
  { title: "21 The Most Stylish Wedding Guest Dresses For Spring", date: "Jan 4, 2022" },
  { title: "21 The Most Stylish Wedding Guest Dresses For Spring", date: "Jan 4, 2022" },
]

const NewsDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main details */}
      <div className="lg:col-span-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Dragon News</h2>

        <div className="border border-gray-200 rounded-sm p-5">
          <img
            src="https://picsum.photos/seed/details/900/500"
            alt="News detail"
            className="w-full h-96 object-cover rounded-sm"
          />
          <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
          </h1>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
            Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy
            News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military
            aid for Kyiv as Ukraine marked its independence day six months after Russia invaded
            the country. The United States of America is committed to supporting the people of
            Ukraine as they continue the fight to defend their sovereignty. As part of that
            commitment, I am proud to announce our biggest tranche of security assistance to
            date: approximately $2 billion.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition"
          >
            <ArrowLeft className="w-5 h-5" /> All news in this category
          </Link>
        </div>

        {/* Editors Insight */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Editors Insight</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {editorsInsight.map((item, idx) => (
              <div key={idx}>
                <img
                  src={`https://picsum.photos/seed/editor${idx}/300/200`}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-sm bg-gray-200"
                />
                <h3 className="mt-3 font-bold text-gray-900 leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-500 flex items-center gap-1">
                  📅 {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="lg:col-span-4">
        <RightSidebar />
      </div>
    </div>
  )
}

export default NewsDetails

const items = [
  { label: "Swimming", img: "/src/assets/swimming.png" },
  { label: "Class", img: "/src/assets/class.png" },
  { label: "Play Ground", img: "/src/assets/playground.png" },
]

const QZone = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Q-Zone</h3>
      <div className="space-y-5">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white p-3 rounded-sm shadow-sm">
            <img
              src={item.img || "/placeholder.svg"}
              alt={item.label}
              className="w-full h-40 object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QZone

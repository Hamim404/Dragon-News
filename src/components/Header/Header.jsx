import "./Header.css"

const Header = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const [weekday, ...rest] = today.split(", ")

  return (
    <header className="text-center pt-8 pb-4">
      <h1 className="font-title font-newspaper text-5xl md:text-6xl font-black tracking-tight text-gray-900">
        The Dragon News
      </h1>
      <p className="mt-3 text-gray-500 text-sm md:text-base">
        Journalism Without Fear or Favour
      </p>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
        <span className="font-semibold text-gray-900">{weekday},</span> {rest.join(", ")}
      </p>
    </header>
  )
}

export default Header

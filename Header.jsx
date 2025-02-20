export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Genmeds</h1>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-gray-600 hover:text-accent">Find Stores</a>
          <a href="#" className="text-gray-600 hover:text-accent">Compare Prices</a>
          <a href="#" className="text-gray-600 hover:text-accent">Search Medicines</a>
          <input 
            type="text" 
            placeholder="Search medicines..." 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </nav>
    </header>
  )
}

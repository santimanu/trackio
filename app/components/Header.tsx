
export default function Header() {
  return (
<header className="fixed top-5 w-2/3 z-50 bg-white text-gray-900 rounded-full mt-3 mx-10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <h1 className="text-xl font-bold">Trackio AI</h1>
    
    <nav className="space-x-4">
      <a href="#features" className="hover:underline">Features</a>
      <a href="#how" className="hover:underline">Princing</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
    
    <div className="space-x-4">
      <a href="">Log In</a>
      <a href="" className="">Sign Up</a>
    </div>
  </div>
</header>

  );
} 
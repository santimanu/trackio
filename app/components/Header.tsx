
export default function Header() {
  return (
<header className="fixed top-5 w-2/3 z-50 bg-white text-gray-900 rounded-full mt-3 mx-10">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <h1 className="text-xl font-bold">Trackio AI</h1>
    
    <nav className="space-x-5">
      <a href="#features" className="hover:underline">Features</a>
      <a href="#solutions" className="hover:underline">Solutions</a>
      <a href="#benefits" className="hover:underline">Benefits</a>
      <a href="#how" className="hover:underline">How it Works</a>
      <a href="#price" className="hover:underline">Princing</a>
    </nav>
    
    <div className="space-x-4">
      <a href="">Log In</a>
      <a href="" className="">Sign Up</a>
    </div>
  </nav>
</header>

  );
} 
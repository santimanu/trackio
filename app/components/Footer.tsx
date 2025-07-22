// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Trackio</h3>
          <p className="text-sm text-gray-500">
            Your personal finance app. <br /> Track your expenses effortlessly.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="mailto:support@trackio.com" className="hover:text-blue-600">support@trackio.com</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact form</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-600" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-600" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-6 text-center text-sm text-gray-400 py-4 px-6">
        © {new Date().getFullYear()} Trackio. All rights reserved.
      </div>
    </footer>
  );
}

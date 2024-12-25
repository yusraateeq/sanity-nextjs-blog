export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xl text-gray-300">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
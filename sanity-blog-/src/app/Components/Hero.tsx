import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-950 text-white py-40">
      <div className="absolute inset-0 overflow-hidden">
        
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Welcome to the World of Blogging
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Explore insightful articles, tips, and stories to elevate your knowledge and creativity.
        </p>

        <Link href="/" className="bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300">
            Read Our Latest Posts
        </Link>
      </div>
    </section>
  );
}


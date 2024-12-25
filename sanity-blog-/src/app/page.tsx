import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import { urlFor } from '@/sanity/lib/image';

interface Iblog {
  name: string;
  subheading: string;
  slug?: { current: string };
  poster?: {
    asset: {
      _ref: string;
    };
  };
}

export default async function BlogPage() {
  const res: Iblog[] = await client.fetch(`*[_type == "blog"]{
    name,
    subheading,
    slug,
    poster
  }`);

  return (
    <div>
      <Header/>
      <Hero/>
      <h1 className="md:text-6xl text-4xl mt-20 mb-10 font-extrabold text-center">Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((data, index) => (
          data.slug?.current ? (
            <Link key={index} href={`/blog/${data.slug.current}`}>
              <div className="mb-4 border-2 p-6 bg-white rounded-md shadow-xl transition-transform transform hover:scale-115 hover:shadow-xl hover:-translate-y-2 duration-300">

                <h2 className="text-3xl font-bold mb-2 text-blue-950">{data.name}</h2>

                {data.poster?.asset && (
                  <div className="my-4">
                    <Image
                      src={urlFor(data.poster).width(800).height(600).url()} 
                      alt={data.name}
                      width={500}   
                      height={500} 
                      className="object-cover rounded-md"
                    />
                  </div>
                )}

                <p className='text-md'>{data.subheading}</p>
                <div>
                  <button className="bg-blue-950 w-full mt-8 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300">
                    Read more
                  </button>
                </div>
              </div>
            </Link>
          ) : (
            <div key={index} className="mb-4 text-red-500">
              <p>Missing slug for &quot;{data.name}&quot;. Please check Sanity Studio.</p>
            </div>
          )
        ))}
      </div>
      <Footer/>
    </div>
  );
}

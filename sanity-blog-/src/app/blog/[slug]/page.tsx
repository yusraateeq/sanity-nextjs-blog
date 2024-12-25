"use client"

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface IBlogDetails {
  name: string;
  subheading: string;
  content: string;
  poster?: {
    asset: {
      _ref: string;
    };
  };
}

export default function BlogDetails() {
  const [slug, setSlug] = useState<string | null>(null);
  const [blog, setBlog] = useState<IBlogDetails | null>(null);

  useEffect(() => {
    // Access the slug from the URL after the component mounts (client-side)
    const currentSlug = window.location.pathname.split('/').pop();
    if (currentSlug) {
      setSlug(currentSlug);
    }
  }, []);

  useEffect(() => {
    // Fetch the blog data once the slug is available
    if (slug) {
      const fetchBlogData = async () => {
        const query = `*[_type == "blog" && slug.current == $slug][0]`;
        const fetchedBlog: IBlogDetails = await client.fetch(query, { slug });
        setBlog(fetchedBlog);
      };
      fetchBlogData();
    }
  }, [slug]);

  if (!blog) {
    return <div>Blog not found. Please check the slug or Sanity configuration.</div>;
  }

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.name}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{blog.subheading}</h2>

        {blog.poster?.asset && (
          <div className="my-8">
            <Image
              src={urlFor(blog.poster).width(800).height(600).url()}
              alt={blog.name}
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="prose prose-lg text-gray-700 mt-8">
          <PortableText value={blog.content} />
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            ← Back to Blog
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

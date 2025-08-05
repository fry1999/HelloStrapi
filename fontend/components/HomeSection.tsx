'use client';

import { useState, useEffect } from 'react';
import { strapiAPI } from '@/lib/api';
import { Home, StrapiData } from '@/types/strapi';

export default function HeroSection() {
  const [homes, setHomes] = useState<Home[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchHome = async () => {
      try {
        setLoading(true);
        const response: StrapiData<Home[]> = await strapiAPI.getHeroSections();
        setHomes(response.data);
      } catch (err) {
        setError('Không thể tải dữ liệu trang chủ');
        console.error('Error fetching home:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{homes?.[0]?.attributes.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{homes?.[0]?.attributes.description[0].children[0].text}</p>
      </div>
    </section>
  );
}
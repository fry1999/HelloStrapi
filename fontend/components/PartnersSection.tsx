'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { strapiAPI } from '@/lib/api';
import { Partner, StrapiData } from '@/types/strapi';

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const response: StrapiData<Partner[]> = await strapiAPI.getPartners();
        setPartners(response.data);
      } catch (err) {
        setError('Không thể tải dữ liệu đối tác');
        console.error('Error fetching partners:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const categories = ['All', 'Technology', 'Business', 'Strategic'];
  
  const filteredPartners = selectedCategory === 'All' 
    ? partners 
    : partners.filter(partner => partner.attributes.category === selectedCategory);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải đối tác...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Đối Tác Của Chúng Tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Hợp tác cùng các đối tác uy tín để mang lại giá trị tốt nhất
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category === 'All' ? 'Tất cả' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {partner.attributes.logo?.data && (
                <div className="mb-4 flex justify-center">
                  <Image
                    src={strapiAPI.getMediaURL(partner.attributes.logo.data.attributes.url)}
                    alt={partner.attributes.logo.data.attributes.alternativeText || partner.attributes.name}
                    width={120}
                    height={80}
                    className="w-auto h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.attributes.name}
                </h3>
                
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-3">
                  {partner.attributes.category}
                </span>
                
                <p className="text-gray-600 text-sm mb-4">
                  {partner.attributes.description}
                </p>
                
                {partner.attributes.website && (
                  <a
                    href={partner.attributes.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Xem website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p>Không có đối tác nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </section>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { strapiAPI } from '@/lib/api';
import { Service, StrapiData } from '@/types/strapi';

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response: StrapiData<Service[]> = await strapiAPI.getServices();
        setServices(response.data);
      } catch (err) {
        setError('Không thể tải dữ liệu services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải dịch vụ...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {'当社のITソリューション領域'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {'まずはお客様の問題を理解し、それから最適な技術ソリューションを提案し、製品を作成します。'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {service.attributes.icon?.data && (
                <div className="mb-4">
                  <Image
                    src={strapiAPI.getMediaURL(service.attributes.icon.data.attributes.url)}
                    alt={service.attributes.icon.data.attributes.alternativeText || service.attributes.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.attributes.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.attributes.description[0].children[0].text}
              </p>
              
              {/* {service.attributes.features && service.attributes.features.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {service.attributes.features.map((feature) => (
                    <li key={feature.id} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        <strong>{feature.title}:</strong> {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
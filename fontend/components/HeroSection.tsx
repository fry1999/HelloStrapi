'use client';

import { useState, useEffect } from 'react';
import { strapiAPI } from '@/lib/api';
import { Home, StrapiData } from '@/types/strapi';
import Image from 'next/image';
import { ArrowDown, Play, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [homes, setHomes] = useState<Home[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState(false);

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

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg mb-8 max-w-2xl mx-auto animate-pulse"></div>
          
          {/* Image skeleton */}
          <div className="relative mt-12">
            <div className="w-full h-96 bg-gray-200 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );

  // Error component
  const ErrorState = () => (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-600 text-2xl">⚠️</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Có lỗi xảy ra</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Thử lại
        </button>
      </div>
    </section>
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState />;

  const imageUrl = homes?.[0]?.attributes.backgroundImage.data?.attributes.url;
  const fullImageUrl = imageUrl ? strapiAPI.getMediaURL(imageUrl) : '';
  const heroData = homes?.[0]?.attributes;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
              {heroData?.title || 'Loading...'}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              {heroData?.description?.[0]?.children?.[0]?.text || 'Loading description...'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Khám phá ngay
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Xem demo
                </span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          {fullImageUrl && (
            <div className="relative animate-fade-in-up animation-delay-800">
              {/* Image container with fancy styling */}
              <div className="relative max-w-4xl mx-auto">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 scale-105"></div>
                
                {/* Main image */}
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
                    )}
                    <Image
                      src={fullImageUrl}
                      alt={heroData?.backgroundImage.data?.attributes.alternativeText || 'Hero Image'}
                      width={1200}
                      height={800}
                      className={`w-full h-auto rounded-2xl transition-opacity duration-700 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      priority
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-2xl rotate-12 shadow-lg opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500 rounded-2xl -rotate-12 shadow-lg opacity-80"></div>
              </div>
            </div>
          )}

          {/* Scroll indicator */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
            <div className="inline-flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
              <span className="text-sm font-medium mb-2">Cuộn xuống để khám phá</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
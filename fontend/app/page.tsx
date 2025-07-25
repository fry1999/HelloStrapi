import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chào mừng đến với HelloStrapi
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dự án demo kết nối Next.js Frontend với Strapi Backend
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Xem Dịch Vụ
            </a>
            <a
              href="#partners"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Đối Tác
            </a>
          </div>
        </div>
      </header>

      {/* API Status Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">🔗 Kết nối API Status</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-green-600 mb-2">✅ Frontend</h3>
                <p className="text-gray-600">Next.js đang chạy trên port 3000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-600 mb-2">🔄 Strapi API</h3>
                <p className="text-gray-600">Backend API tại localhost:1337</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-purple-600 mb-2">📊 Content Types</h3>
                <p className="text-gray-600">5 content types đã được định nghĩa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Partners Section */}
      <section id="partners">
        <PartnersSection />
      </section>

      {/* API Endpoints Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              📡 Strapi API Endpoints
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Available Endpoints:</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="bg-gray-800 p-3 rounded">
                    <span className="text-green-400">GET</span> /api/hero-sections
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <span className="text-green-400">GET</span> /api/services
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <span className="text-green-400">GET</span> /api/company-infos
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <span className="text-green-400">GET</span> /api/contact-infos
                  </div>
                  <div className="bg-gray-800 p-3 rounded">
                    <span className="text-green-400">GET</span> /api/partners
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">Ví dụ API Call:</h3>
                <div className="bg-gray-800 p-4 rounded text-xs overflow-x-auto">
                  <pre>{`// Sử dụng strapiAPI helper
import { strapiAPI } from '@/lib/api';

// Lấy tất cả services
const services = await strapiAPI.getServices();

// Lấy partners với filter
const partners = await strapiAPI.getPartners();

// Lấy URL media đầy đủ
const imageUrl = strapiAPI.getMediaURL(
  media.data.attributes.url
);`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 HelloStrapi - Demo Next.js + Strapi Integration
          </p>
        </div>
      </footer>
    </div>
  );
}

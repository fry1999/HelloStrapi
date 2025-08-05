import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import HeroSection from '@/components/HeroSection';
import HeaderSection from '@/components/HeaderSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white">
        <HeaderSection />
      </div>

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Partners Section */}
      <section id="partners">
        <PartnersSection />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Logo & Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">NeoX - ASIA</h3>
                  <p className="text-sm text-gray-400">株式会社</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>〒107-0052 東京都港区赤坂1丁目1-17 細川ビル 811</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:info@neox.asia.co.jp" className="hover:text-blue-400 transition-colors">
                    info@neox.asia.co.jp
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>+81-3-XXXX-XXXX</span>
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-blue-400 transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    個人情報に関する取り扱いについて
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                ©2023 NeoX - Asia株式会社
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

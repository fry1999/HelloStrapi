'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            問い合わせ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        〒107-0052 東京都港区赤坂1丁目17番<br />
                        川ビル 8階
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-blue-600 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-red-500 font-semibold text-lg">
                        070-8435-6609
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        info@neox.asia.co.jp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      名
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    送信
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
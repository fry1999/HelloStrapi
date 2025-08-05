import axios from 'axios';

// Cấu hình base URL cho Strapi API
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Tạo instance axios với cấu hình mặc định
const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function để lấy dữ liệu từ Strapi
export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
  try {
    // Merge default và custom options
    const mergedOptions = {
      headers: {},
      ...options,
    };

    // Build request URL
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${path}${queryString ? `?${queryString}` : ''}`;

    // Make request
    const response = await api.get(requestUrl, mergedOptions);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Specific API functions cho từng content type
export const strapiAPI = {

  // Lấy hero sections
  getHeroSections: () => fetchAPI('/hero-sections', { populate: '*' }),
  
  // Lấy services
  getServices: () => fetchAPI('/services', { 
    populate: '*',
    sort: 'order:asc'
  }),
  
  // Lấy company info
  getCompanyInfo: () => fetchAPI('/company-infos/1', { populate: '*' }),
  
  // Lấy contact info
  getContactInfo: () => fetchAPI('/contact-infos', { populate: '*' }),
  
  // Lấy partners
  getPartners: () => fetchAPI('/partners', { 
    populate: '*',
    sort: 'order:asc'
  }),
  
  // Lấy media URL đầy đủ
  getMediaURL: (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${API_URL}${url}`;
  }
};

export default api; 
# 🔗 Hướng dẫn kết nối Next.js Frontend với Strapi Backend

## 📋 Tổng quan dự án

Dự án này bao gồm:
- **Frontend**: Next.js 15.4.4 với TypeScript và Tailwind CSS (thư mục `fontend/`)
- **Backend**: Strapi 4.25.23 với SQLite database (thư mục `hello-strapi/`)

## 🚀 Cách chạy dự án

### 1. Khởi động Strapi Backend

```bash
cd hello-strapi
npm run develop
```

Strapi admin panel sẽ chạy tại: `http://localhost:1337/admin`
API endpoints tại: `http://localhost:1337/api`

### 2. Khởi động Next.js Frontend

```bash
cd fontend
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

### 3. Tạo file .env.local (nếu chưa có)

Trong thư mục `fontend/`, tạo file `.env.local`:

```bash
# Strapi API Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 📊 Content Types có sẵn trong Strapi

### 1. **Hero Section** (`/api/hero-sections`)
```typescript
{
  title: string;
  subtitle: string;
  backgroundImage: StrapiMedia;
  ctaButton: {
    text: string;
    url: string;
  };
}
```

### 2. **Services** (`/api/services`)
```typescript
{
  title: string;
  description: StrapiBlocks[];
  order: number;
  icon: StrapiMedia;
  features: Array<{
    title: string;
    description: string;
  }>;
}
```

### 3. **Company Info** (`/api/company-infos`)
```typescript
{
  companyName: string;
  foundedYear: string;
  address: string;
  phone: string;
  email: string;
  description: StrapiBlocks[];
  mission: StrapiBlocks[];
  version: StrapiBlocks[];
  logo: StrapiMedia;
}
```

### 4. **Contact Info** (`/api/contact-infos`)
```typescript
{
  address: StrapiRichText[];
  phone: string;
  email: string;
  businessHours: string;
  mapEmbedCode: string;
}
```

### 5. **Partners** (`/api/partners`)
```typescript
{
  name: string;
  website: string;
  description: string;
  category: 'Technology' | 'Business' | 'Strategic';
  order: number;
  logo: StrapiMedia;
}
```

## 🔧 Cách sử dụng API trong Frontend

### 1. Import API helper

```typescript
import { strapiAPI } from '@/lib/api';
import { Service, Partner, StrapiData } from '@/types/strapi';
```

### 2. Fetch dữ liệu trong component

```typescript
'use client';

import { useState, useEffect } from 'react';
import { strapiAPI } from '@/lib/api';
import { Service, StrapiData } from '@/types/strapi';

export default function ServicesComponent() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: StrapiData<Service[]> = await strapiAPI.getServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.attributes.title}</h3>
          {service.attributes.icon?.data && (
            <img 
              src={strapiAPI.getMediaURL(service.attributes.icon.data.attributes.url)}
              alt={service.attributes.title}
            />
          )}
        </div>
      ))}
    </div>
  );
}
```

### 3. Các API methods có sẵn

```typescript
// Lấy tất cả hero sections
const heroSections = await strapiAPI.getHeroSections();

// Lấy services (sắp xếp theo order)
const services = await strapiAPI.getServices();

// Lấy company info
const companyInfo = await strapiAPI.getCompanyInfo();

// Lấy contact info
const contactInfo = await strapiAPI.getContactInfo();

// Lấy partners (sắp xếp theo order)
const partners = await strapiAPI.getPartners();

// Lấy URL đầy đủ cho media files
const fullImageUrl = strapiAPI.getMediaURL('/uploads/image.jpg');
```

## 🎨 Components đã tạo

### 1. **ServicesSection** (`/components/ServicesSection.tsx`)
- Hiển thị danh sách services từ Strapi
- Loading state và error handling
- Responsive grid layout

### 2. **PartnersSection** (`/components/PartnersSection.tsx`)
- Hiển thị danh sách partners với filter theo category
- Interactive category buttons
- Hover effects và responsive design

## 🔗 API Endpoints

Tất cả endpoints sử dụng base URL: `http://localhost:1337/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/hero-sections` | Lấy hero sections |
| GET | `/services` | Lấy services |
| GET | `/company-infos` | Lấy company info |
| GET | `/contact-infos` | Lấy contact info |
| GET | `/partners` | Lấy partners |

### Query Parameters hữu ích:

```bash
# Populate relationships
GET /api/services?populate=*

# Sort results
GET /api/services?sort=order:asc

# Filter results
GET /api/partners?filters[category][$eq]=Technology

# Pagination
GET /api/services?pagination[page]=1&pagination[pageSize]=10
```

## 🛠️ Troubleshooting

### 1. CORS Issues
Nếu gặp lỗi CORS, thêm vào `hello-strapi/config/middlewares.js`:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
    }
  },
  // ... other middlewares
];
```

### 2. API không trả về data
- Kiểm tra content types đã được publish chưa
- Đảm bảo có data trong Strapi admin panel
- Check network tab trong browser dev tools

### 3. Image không hiển thị
- Đảm bảo sử dụng `strapiAPI.getMediaURL()` để lấy full URL
- Check file đã được upload trong Strapi media library

## 📝 Next Steps

1. **Thêm Authentication**: Sử dụng Strapi Users & Permissions plugin
2. **SEO Optimization**: Thêm meta tags từ Strapi content
3. **Caching**: Implement caching với React Query hoặc SWR
4. **Error Boundary**: Thêm error boundaries cho better UX
5. **Loading States**: Implement skeleton loading states

## 🔧 Environment Variables

Tạo file `.env.local` trong thư mục `fontend/`:

```bash
# Required
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# Optional - for production
# NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
```

## 📦 Dependencies đã thêm

- `axios`: HTTP client cho API calls
- TypeScript types cho Strapi content structures
- Responsive components với Tailwind CSS

---

*Dự án này là một ví dụ demo về cách kết nối Next.js frontend với Strapi backend. Bạn có thể mở rộng và customize theo nhu cầu của project.* 
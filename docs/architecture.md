# Arquitectura base - Bikes Corp

## Objetivo
Plataforma corporativa de catálogo para bicicletas, con CMS ligero vía Django admin y frontend desacoplado para SEO y escalabilidad.

## Stack
- **Backend:** Django + Django REST Framework + PostgreSQL.
- **Frontend:** Nuxt 3 + Tailwind CSS.
- **Comunicación:** REST API (`/api/...`).

## Capas
1. **Dominio (`apps/catalog`, `apps/contact`)**
   - Modelos con entidades de negocio: categorías, productos, especificaciones, imágenes y mensajes.
2. **Aplicación/API**
   - Serializers y vistas DRF para exponer catálogo y contacto.
3. **Presentación**
   - Nuxt con rutas SSR-ready, componentes reutilizables y metadatos SEO por página.
4. **Administración**
   - Django admin para operar contenido sin tocar código.

## Decisiones clave
- **Slugs amigables** para URLs de categoría/producto.
- **Apps separadas** (`catalog`, `contact`) para escalar módulos de forma independiente.
- **Modelos normalizados** de producto (`Product`, `ProductImage`, `ProductSpecification`) para flexibilidad del catálogo.
- **Filtrado inicial** por categoría y featured para soportar vistas de home y catálogo.

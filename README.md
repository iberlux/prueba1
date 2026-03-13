# Bikes Corp Platform

Base de proyecto web corporativo para empresa de bicicletas.

## Incluye
- Home corporativa
- Catálogo de productos
- Detalle de producto
- Formulario de contacto
- Gestión de contenidos desde Django admin

> No incluye ecommerce en esta fase.

## Estructura

```text
.
├── backend/
│   ├── apps/
│   │   ├── catalog/
│   │   └── contact/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── components/
│   ├── composables/
│   ├── pages/
│   └── nuxt.config.ts
├── docs/
│   └── architecture.md
└── docker-compose.yml
```

## Requisitos
- Python 3.11+
- Node.js 20+
- PostgreSQL 16+ (o Docker)

## 1) Levantar PostgreSQL

Con Docker:

```bash
docker compose up -d db
```

## 2) Backend (Django + DRF)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend disponible en:
- API: `http://localhost:8000/api/`
- Admin: `http://localhost:8000/admin/`

### Endpoints iniciales
- `GET /api/categories/`
- `GET /api/products/`
- `GET /api/products/<slug>/`
- `POST /api/contact-messages/`

## 3) Frontend (Nuxt 3 + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

Frontend disponible en:
- `http://localhost:3000`

Variable opcional para API:

```bash
NUXT_PUBLIC_API_BASE=http://localhost:8000/api
```

## Buenas prácticas aplicadas
- Arquitectura por apps de dominio.
- Componentes reutilizables en frontend.
- Slugs amigables para SEO.
- SEO base por página con `useSeoMeta`.
- Modelado preparado para crecimiento del catálogo.

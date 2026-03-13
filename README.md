# Bikes Corp Platform

Base de proyecto web corporativo para empresa de bicicletas (sin ecommerce en esta fase).

## Incluye
- Home corporativa
- Catálogo de productos
- Detalle de producto
- Formulario de contacto
- Gestión de contenidos desde Django admin

## Estructura

```text
.
├── backend/
│   ├── apps/
│   │   ├── catalog/
│   │   └── contact/
│   ├── config/
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── components/
│   ├── composables/
│   ├── pages/
│   ├── nuxt.config.ts
│   └── Dockerfile
├── docs/
│   └── architecture.md
└── docker-compose.yml
```

## Opción recomendada (todo dockerizado)

### Arranque
```bash
docker compose up -d --build
```

### Parar servicios
```bash
docker compose down
```

### URLs
- Frontend: http://localhost:3000/
- Backend health: http://localhost:8000/
- API: http://localhost:8000/api/
- Admin Django: http://localhost:8000/admin/

> El backend aplica migraciones automáticamente al iniciar en Docker.

### Primer acceso a admin
```bash
docker compose exec backend python manage.py createsuperuser
```

---

## Opción manual local

### Requisitos
- Python 3.11+
- Node.js 20+
- PostgreSQL 16+

### 1) Base de datos
```bash
docker compose up -d db
```

### 2) Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

### 3) Frontend (otra terminal)
```bash
cd frontend
npm install
npm run dev
```

## Endpoints iniciales
- `GET /api/categories/`
- `GET /api/products/`
- `GET /api/products/<slug>/`
- `POST /api/contact-messages/`

## Troubleshooting rápido
- Si `localhost:8000` no abre:
  - revisa logs backend: `docker compose logs -f backend`
  - confirma DB levantada: `docker compose ps`
- Si `localhost:3000` no abre:
  - revisa logs frontend: `docker compose logs -f frontend`
  - confirma que Nuxt arrancó en `0.0.0.0:3000`
- Si usas modo manual, backend y frontend deben ejecutarse en terminales separadas.

## Buenas prácticas aplicadas
- Arquitectura por apps de dominio.
- Componentes reutilizables en frontend.
- Slugs amigables para SEO.
- SEO base por página con `useSeoMeta`.
- Modelado preparado para crecimiento del catálogo.

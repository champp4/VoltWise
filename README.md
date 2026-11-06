# VoltWise — EV Information Platform

A starter electric-vehicle information website built with Node.js, Express and EJS. It includes a home page, vehicle directory, search/filter, vehicle detail pages and a health endpoint.

> **Data note:** Prices, ranges, battery capacities and charging details in this starter are illustrative placeholders. Verify every specification against current manufacturer information before publishing.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
cd app
npm install
npm start
```

Open http://localhost:8080

## Run with Docker

From the project root:

```bash
docker compose up --build -d
docker compose ps
```

Open http://localhost:8080

Check application health:

```bash
curl http://localhost:8080/health
```

Expected response:

```json
{"status":"ok","service":"ev-platform"}
```

Stop the app:

```bash
docker compose down
```

## Useful routes

- `/` — home page
- `/vehicles` — vehicle directory
- `/vehicles?q=tata` — search
- `/vehicles?type=Scooter` — filter by type
- `/vehicles/tata-nexon-ev` — example detail page
- `/health` — container health endpoint

## Next engineering steps

1. Replace placeholder vehicle data with verified data and a database.
2. Add automated tests and linting.
3. Push the project to GitHub.
4. Build and publish a versioned Docker image.
5. Add Jenkins CI/CD.
6. Deploy to Kubernetes.
7. Provision cloud infrastructure with Terraform.
8. Add Prometheus and Grafana monitoring.

## Project structure

```text
ev-platform/
├── app/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   ├── public/css/style.css
│   └── views/
│       ├── partials/
│       ├── index.ejs
│       ├── vehicles.ejs
│       ├── vehicle-details.ejs
│       └── 404.ejs
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

# Cabular – Scalable Ride-Hailing System Design 🚖

Cabular is a modular, microservice-based system design for a real-time ride-hailing platform. It simulates key features like driver-rider matching, GPS tracking, trip management, dynamic pricing, and event-driven communication.

> 🧠 This is a **system design showcase**, not a production-ready application.

## 🔧 Tech Stack & Tools

- Kafka (event streaming)
- Redis (caching geolocation and session data)
- PostgreSQL (trip/user data)
- FastAPI (mock services)
<<<<<<< HEAD
=======
- Docker (optional)
>>>>>>> 442e386 (Your commit message)
- Draw.io (architecture diagrams)

## 📐 Architecture Overview

<<<<<<< HEAD
![High-Level Architecture]([architecture/high_level_architecture.png](https://github.com/khushi1804/Cabular/blob/main/High_Level_Architecture.png))
=======
![High-Level Architecture](architecture/high_level_architecture.png)
>>>>>>> 442e386 (Your commit message)

- Microservices: Rider, Driver, Trip, Pricing, Notification
- Kafka for async event pipelines
- Redis for geolocation caching
- PostgreSQL for transactional data

## 📁 Repo Structure

- `architecture/`: System diagrams (architecture, ER, sequence)
- `docs/`: Design docs (APIs, caching, scaling, failover)
- `mock_services/`: Simulated API endpoints (FastAPI)
- `simulation/`: Event simulation script

## ✨ Key Features

- Designed to handle 10,000+ concurrent ride requests
- Event-driven architecture with Kafka
- Redis used to bring geolocation query latency from ~300ms to <50ms
- System is horizontally scalable with planned load balancer setup

## 🚀 Future Plans

- Add Kubernetes setup for service orchestration
- Implement metrics tracking using Prometheus
- Simulate real-time dashboards

## 📌 Note

This project is for learning and showcasing **distributed system design**. It focuses on architecture and design principles rather than building a deployable product.

"# Cabular" 

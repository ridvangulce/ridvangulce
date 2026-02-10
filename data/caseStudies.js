export const caseStudies = [
    {
        id: 1,
        slug: "high-scale-ecommerce-api",
        title: "High-Scale E-commerce API Refactor",
        brief: "Refactoring a legacy Node.js monolith into microservices to handle 10k+ concurrent users.",
        role: "Lead Backend Developer",
        timeline: "6 months",
        image: "/images/case-studies/ecommerce-api.jpg", // Placeholder
        tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        narrative: {
            problem: "The legacy monolithic application was suffering from severe performance bottlenecks during peak traffic events. Database locks and memory leaks caused 500 errors for 15% of users during sales.",
            approach: "We adopted a strangler fig pattern to gradually migrate critical domains (Inventory, Order Processing) to separate microservices. We implemented a Redis caching layer to offload read-heavy operations.",
            architecture: "The system now consists of 5 core services communicating via RabbitMQ. API Gateway handles authentication and rate limiting.",
            tradeoffs: "Introducing microservices added deployment complexity and eventual consistency challenges. We chose speed and availability over strict consistency for product listings, but kept strict ACID compliance for orders.",
            outcome: "Reduced response time by 70%, eliminated downtime during the next Black Friday event, and improved developer velocity by allowing meaningful CI/CD for independent services."
        },
        metrics: [
            { label: "Response Time", value: "-70%" },
            { label: "Uptime", value: "99.99%" },
            { label: "Concurrent Users", value: "10k+" }
        ]
    },
    {
        id: 2,
        slug: "realtime-financial-dashboard",
        title: "Real-time Financial Analytics Dashboard",
        brief: "Building a WebSocket-heavy dashboard for visualizing stock market data with sub-millisecond updates.",
        role: "Full Stack Engineer",
        timeline: "4 months",
        image: "/images/case-studies/fin-dashboard.jpg", // Placeholder
        tech: ["Next.js", "TypeScript", "Socket.io", "TimescaleDB", "D3.js"],
        narrative: {
            problem: "Traders needed a dashboard that could render thousands of data points per second without freezing the UI. Previous polling-based solutions were too slow and bandwidth-heavy.",
            approach: "We built a custom WebSocket server optimized for broadcasting efficiently. On the frontend, we used Web Workers to handle data processing off the main thread and canvas-based rendering for charts.",
            architecture: "Node.js cluster for WebSockets, TimescaleDB for efficient time-series storage. React implementation used memoization heavily to prevent unnecessary re-renders.",
            tradeoffs: "Canvas rendering is harder to style and make accessible than SVG, but was necessary for performance. We added a screen-reader friendly table view as a fallback.",
            outcome: "Achieved consistent 60fps rendering even during high market volatility. Reduced server load by 40% using WebSockets over polling."
        },
        metrics: [
            { label: "Updates/Sec", value: "5000+" },
            { label: "Latency", value: "<50ms" },
            { label: "Server Load", value: "-40%" }
        ]
    }
];

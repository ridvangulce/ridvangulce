import React, { useState } from "react";

const ApiEndpointCard = ({ method, endpoint, description, response }) => {
  const [showResponse, setShowResponse] = useState(false);

  const getMethodClass = () => {
    return `http-method ${method.toLowerCase()}`;
  };

  return (
    <div className="api-endpoint-card">
      {/* Method and Endpoint */}
      <div className="flex items-center gap-3 mb-3">
        <span className={getMethodClass()}>{method}</span>
        <code className="text-accent-primary font-semibold flex-1">
          {endpoint}
        </code>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 font-sans">
        {description}
      </p>

      {/* Response Toggle */}
      <button
        onClick={() => setShowResponse(!showResponse)}
        className="text-xs text-accent-primary hover:text-accent-secondary transition-colors font-sans font-semibold"
      >
        {showResponse ? "Hide" : "Show"} Response ↓
      </button>

      {/* Response Preview */}
      {showResponse && (
        <div className="mt-3 p-3 bg-bg-secondary rounded-lg border border-glass-border">
          <div className="text-xs text-text-secondary mb-2 font-sans">
            Status: {response.status}
          </div>
          <pre className="text-xs text-text-primary overflow-x-auto">
            {JSON.stringify(response.data || response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

const ApiShowcase = () => {
  const apiExamples = [
    {
      method: "GET",
      endpoint: "/api/v1/users/:id",
      description: "Retrieve user information by ID",
      response: {
        status: 200,
        data: {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          role: "admin"
        }
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/auth/login",
      description: "Authenticate user and generate JWT token",
      response: {
        status: 201,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        user: {
          id: 1,
          name: "John Doe"
        }
      }
    },
    {
      method: "PUT",
      endpoint: "/api/v1/products/:id",
      description: "Update product details",
      response: {
        status: 200,
        message: "Product updated successfully",
        data: {
          id: 123,
          name: "Updated Product",
          price: 99.99
        }
      }
    }
  ];

  return (
    <section className="api-showcase p-2 laptop:p-0">
      <div className="flex items-center gap-2 mob:gap-3 mb-2">
        <div className="w-1 h-8 mob:h-12 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
        <h2 className="text-xl mob:text-2xl laptop:text-3xl font-bold">
          API Design & Development<span className="gradient-text">.</span>
        </h2>
      </div>

      <p className="text-sm mob:text-base text-text-secondary mb-6 mob:mb-8 ml-4">
        Sample API endpoints from production systems
      </p>

      <div className="api-examples">
        {apiExamples.map((api, index) => (
          <ApiEndpointCard
            key={index}
            method={api.method}
            endpoint={api.endpoint}
            description={api.description}
            response={api.response}
          />
        ))}
      </div>
    </section>
  );
};

export default ApiShowcase;

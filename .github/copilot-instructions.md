# JavaScript

This project uses JavaScript with the following styles:

- All models will be classes with singular naming (i.e. `User` for the `users` table)
- Indent with 2 spaces ONLY
- Variables will be camelCase
- Constants will be in all caps with underscores (i.e. `MAX_USERS`)
- All functions will be in camelCase
- All code files will be lower case with underscores.
- Markdown files will be lower case with hyphens.
- All application logic will go in the `lib` directory
- All configuration will be done with environment variables, using a `.env` file.
- Do not export a class directly, use module method instead to create the instance you need (aka "factory")

# Project Requirements

We are developing a Pastebin service for anonymous users. The service allows users to:

- **Create a Paste**: Enter a block of text to receive a randomly generated link.
- **Set Expiration**: Pastes are persistent by default, but users can optionally specify a timed expiration.
- **Retrieve a Paste**: View the contents of a paste using its unique URL.
- **Analytics & Monitoring**: The service tracks page views and aggregates monthly visit statistics.
- **Automated Cleanup**: Expired pastes are automatically deleted.
- **High Availability & Performance**: The system must be designed for scalability, low latency, and efficient resource usage.

## **Monolithic Implementation**

- **Objective**: 
    - Build a single-tier application that incorporates all functionality: paste creation, retrieval, expiration, analytics, cleanup, and caching
    - Develop a traditional monolithic application (without splitting into services or using external communication protocols like SOAP, REST, or gRPC for internal interactions).
    - Use Postgre Database pre-populated with data for storing paste contents, metadata (expiration, creation timestamp, etc.), and analytics data.
    - Provide a simple web interface and API endpoints for paste creation and retrieval.

## Performance & Comparative Testing

- **Test Scenario**: Design and execute performance tests to simulate different loads on your system. Use Locust to generate a range of concurrent requests.

- **Metrics to Measure:**
    - **Latency**: Average and peak response times.
    - **Throughput**: Number of requests processed per second.
    - **Resource Utilization**: Monitor CPU and RAM usage across different services.
    - **Scalability**: Ability to handle increased loads without degradation.
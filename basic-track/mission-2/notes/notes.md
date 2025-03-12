# Web Development Notes

## MongoDB Fundamentals

### Introduction to MongoDB

1. What is MongoDB?
   - MongoDB is a NoSQL database storing data in JSON-like documents
   - Breaks from traditional relational models
   - Ideal for managing vast data
   - Trusted by major companies (Google, Facebook, eBay)

2. Advantages of MongoDB
   - Scalable high-performance & open source
   - Document-oriented database
   - Cost-effective solutions
   - Rich ecosystem (tools, documentation, community)

3. MongoDB vs Traditional Databases

   | Feature | MongoDB | Traditional Databases |
   |---------|---------|----------------------|
   | Data Model | Document-oriented | Relational |
   | Schema | Flexible | Rigid |
   | Scalability | Horizontal & Vertical | Vertical |
   | Performance | Optimized for unstructured/semi-structured data | Optimized for structured queries |

4. Terminology Comparison
   - MongoDB: Database → Collections → Documents → Fields
   - RDBMS: Database → Tables → Rows → Columns

### MongoDB Features & Use Cases

1. Key Features
   - JSON-like Documents (BSON)
   - Indexing
   - Aggregation Framework
   - Security Features
   - Free Atlas Database
   - MongoDB Compass (GUI)

2. Ideal Use Cases
   - E-commerce applications
   - Social media platforms
   - Gaming applications
   - Web applications
   - Mobile applications
   - Real-time applications

### MongoDB Operations

1. Basic Queries
   - Document operations (insert, find, update, delete)
   - Comparison operators ($eq, $neq, $gt, $lt, $gte, $lte)
   - Logical operators ($and, $or, $in, $nin)
   - Array operators ($all, $elemMatch)
   - Field operators ($exists, $type, $size)
   - Update operators ($set, $unset, $push, $pull)

2. What is Aggregation?
   - Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
   - The stages make up what is known as a pipeline.
   - The stages in a pipeline can filter, sort, group, reshape, and modify documents that pass through the pipeline.

3. Aggregation Framework
   - Pipeline stages ($match, $project, $group, $sort)
   - Advanced operators ($bucket, $facet, $lookup)
   - Data transformation ($addFields, $out, $merge)

4. Data Modeling Approaches

   | Embedding | Referencing |
   |-----------|-------------|
   | One-to-One Relationships | One-to-Many, Many-to-Many Relationships |
   | Frequent Reading | Frequent Writing |
   | Atomic Updates | Big Data Size |
   | Reduced Network Overhead | Scalability |
   | Small Data Size | Flexibility |

## Node.js & Express

### Node.js Fundamentals

1. Key Characteristics
   - JavaScript runtime for server-side development
   - Single-threaded, event-driven architecture
   - Non-blocking I/O
   - Ideal for data-intensive applications

2. Core Components
   - V8 Engine (JavaScript engine written in C++)
   - Libuv (handles async I/O operations)
      - Event Loop: Manages callbacks & network I/O
      - Thread Pool: Handles CPU-intensive tasks

3. Module System
   - Types: Local, Built-in, Third-party
   - Module Formats:

   | CommonJS | ESM |
   |----------|-----|
   | require | import |
   | module.exports | export default |
   | .js extension | .mjs extension |

### Express & Web Concepts

1. Core Concepts
   - Middleware
   - Routing
   - Error handling
   - Request-Response cycle

2. Streams & Buffers
   - Types:
      - Readable Stream
      - Writable Stream
      - Duplex Stream
      - Transform Stream

## Mongoose

### Fundamentals

1. Overview
   - Object Data Modeling (ODM) library for MongoDB
   - Provides schema-based solution

2. Key Features
   - Schema Definition
   - Model Creation
   - Data Validation
   - Advanced Querying
   - Middleware Support
   - Population

### Advanced Features

1. Validation
   - Built-in validation
   - Custom validation
   - Third-party libraries (Validator, Joi, Zod)

2. Methods & Middleware
   - Static Methods
   - Instance Methods
   - Middleware types:
      - Document Middleware
      - Query Middleware
      - Aggregation Middleware

3. Special Features
   - Virtuals
      - Document properties that don't persist in the database
      - Can be get and set like normal fields
      - Useful for:
         - Computing derived values
         - Saving database space
         - Reducing database complexity

   - Population
      - Replaces specified paths with actual document references
      - Benefits:
         - Reduces data duplication
         - Improves application performance
         - Enables efficient data relationships
         - Simplifies complex data queries

## Architecture & Design Patterns

1. MVC Pattern
   - Models
   - Views (Template Engines, Frontend Frameworks)
   - Controllers

2. Modular Pattern Benefits
   - Scalability
   - Maintainability
   - Better Refactoring
   - Efficient Development

3. Design Principles
   - DRY (Don't Repeat Yourself)
   - Fat Model / Thin Controller

4. Request-Response Flow
   Client → Route → Controller ↔ Service ↔ Database

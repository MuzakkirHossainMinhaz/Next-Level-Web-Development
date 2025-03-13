# Software Development Guide

## Software Development Life Cycle (SDLC)

### Phases & Roles

1. Analysis
   - Product Owner
   - Project Manager
   - Business Analyst

2. Design
   - System Architect
   - UI/UX Designer

3. Development
   - Frontend Developer
   - Backend Developer
   - Fullstack Developer

4. Testing
   - Solution Architect
   - QA Engineer
   - Tester

5. Deployment
   - Database Administrator
   - DevOps

6. Maintenance
   - Support Engineer
   - Tester
   - Developer

### Documentation Requirements by Phase

1. Analysis Documents
   - Product Requirements Document (PRD)
   - Business Requirements Document (BRD)
   - Software Requirements Specification (SRD)
   - Functional Requirements Document (FRD)

2. Design Documents
   - System Design of Software
   - High Level Design Document
   - Low Level Design Document
   - Database Schema

3. Development Deliverables
   - Backend Development
   - Frontend Development
   - API Integration
   - Database Schema

4. Testing Documents
   - Test Plan
   - Test Case
   - Test Scripts
   - Defects Report

5. Deployment Documents
   - Release Notes
   - Installation Guides
   - Configuration Guides

6. Maintenance Documents
   - Change Request
   - Bug Reports
   - Patch Release

## Database Design Patterns

### Data Modeling Approaches

1. Embedding

   | Pros | Cons |
   |------|------|
   | Faster reading | Slow writing |
   | Update all data with single query | Update query can be complex |
   | Less expensive lookup | Data duplicacy & Limited Size |

2. Referencing

   | Pros | Cons |
   |------|------|
   | Faster writing | Slow reading |
   | Avoid data duplicacy | Expensive lookup |
   | Scalability | - |

## Database Transactions

### ACID Principles

1. Atomicity
   - "All or nothing" rule
   - Operations:
     - Abort: Changes not visible if transaction fails
     - Commit: Changes visible on success

2. Consistency
   - Maintains database integrity
   - Preserves data relationships
   - Ensures transaction correctness

3. Isolation
   - Independent transaction operation
   - Prevents interference between transactions
   - Maintains transaction order

4. Durability
   - Permanent storage of committed changes
   - Persistence through system failures
   - Data safety guarantee

### Transaction Usage

- Recommended for:
  - Two or more database write operations
  - Complex data operations requiring rollback capability

## Error Handling

### Error Categories

1. Operational Errors (Predictable)
   - Invalid user inputs
   - Server startup failures
   - Database connection issues
   - Invalid authentication tokens

2. Programmatical Errors (Development)
   - Undefined variable usage
   - Non-existent property access
   - Type mismatches
   - Incorrect API parameter usage

3. Asynchronous Errors
   - Unhandled Rejections

4. Synchronous Errors
   - Uncaught Exceptions

## Programming Concepts

### Higher Order Functions

- Definition: Functions that:
  - Accept functions as parameters
  - Perform operations
  - Return functions

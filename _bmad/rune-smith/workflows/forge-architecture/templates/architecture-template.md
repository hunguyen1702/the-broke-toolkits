---
status: draft
stepsCompleted: []
lastStep: ''
created_date: ''
completed_date: ''
prd_source: ''
user_name: ''
---

# Architecture Document: {{project_name}}

## 1. High-Level Stack
* **Backend:** [e.g., Ruby on Rails]
* **Database:** [e.g., PostgreSQL]
* **Async Processing:** [e.g., Sidekiq / Redis]
* **Infrastructure:** [e.g., AWS / Docker]

---

## 2. Logic & Feature Mapping
*Maps business requirements to technical search keywords.*

| Feature Requirement | Search Keywords / Technical Concepts | Responsibility Description |
| :--- | :--- | :--- |
| **Authentication** | `auth`, `devise`, `jwt`, `session`, `warden` | Manages login flows, token generation, and user sessions. |
| **[Feature Group A]** | `[keyword_1]`, `[keyword_2]` | [Brief description]. |
| **External Integrations** | `client`, `service`, `adapter`, `api_key` | Manages communication with third-party APIs. |

---

## 3. Data Model Strategy
*Describes the core domain entities (abstracted from DB tables).*

* **`User` Domain:** Represents the system actor.
* **`[Core Entity]` Domain:** Represents the primary business object.
* **`Log/Audit` Domain:** Represents immutable records for tracking.

---

## 4. API Interface Strategy
*Describes the core API endpoints, what it do*

* **Public API:** Open endpoints.
* **Private API:** Authenticated endpoints for standard users.
* **Admin API:** Privileged endpoints for management.
* **Webhook API:** Endpoints for external callbacks.
* **Feature A API:** This api is for feature A
* **Feature B API:** This api is for feature B

---

## 5. Coding Patterns & Search Strategy
*Standard patterns used in the codebase and how to locate them.*

| Pattern Name | Purpose | Search Keywords / Suffixes |
| :--- | :--- | :--- |
| **Service Objects** | Encapsulates complex business logic or multi-step operations. | `*Service`, `*Manager`, `call`, `execute` |
| **Query Objects** | Isolates complex SQL/Database queries from Controllers/Models. | `*Query`, `scope`, `repository`, `find_by` |
| **Form/Policy Objects** | Handles authorization rules or specific input validations. | `*Policy`, `*Form`, `validate`, `authorize` |
| **Decorators/Presenters** | Formats data for the View/API response layer (logic-less). | `*Decorator`, `*Serializer`, `*Presenter`, `as_json` |
| **Workers/Jobs** | Handles asynchronous background tasks. | `*Worker`, `*Job`, `perform`, `async` |

---

## 6. Testing Strategy & Tech Stack
*Tools and conventions for ensuring code quality.*

### Core Stack
* **Framework:** `RSpec` (Behavior-Driven Development framework).
* **Data Seeding:** `FactoryBot` (Replaces brittle fixtures with dynamic factories).
* **External HTTP:** `VCR` + `WebMock` (Records HTTP interactions to cassettes for deterministic replay).
* **Code Coverage:** `SimpleCov` (Tracks test coverage percentage).

### Testing Conventions
1.  **Models:** Test validations, associations, and custom scopes.
2.  **Services:** Test the `call`/`execute` method in isolation.
3.  **Requests/Controllers:** Test API response status codes (`2xx`, `4xx`) and payload structure.
4.  **External APIs:** ALWAYS use `VCR` to record interactions. Do not hit real endpoints in CI.

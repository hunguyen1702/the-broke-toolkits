# Architecture Document: {{project_name}}

> **Note:** All examples below are illustrative. Replace them with patterns
> and keywords that match the actual language, framework, and conventions
> detected in this project.

## 1. High-Level Stack
* **Backend:** [e.g., Ruby on Rails, Express.js, Django, Go net/http]
* **Database:** [e.g., PostgreSQL, MongoDB, SQLite]
* **Async Processing:** [e.g., Sidekiq, Celery, Bull, goroutines — or "None detected"]
* **Infrastructure:** [e.g., AWS, Docker, Vercel — or "None detected"]

---

## 2. Logic & Feature Mapping
*Maps business requirements to technical search keywords.*

| Feature Requirement | Search Keywords / Technical Concepts | Responsibility Description |
| :--- | :--- | :--- |
| **Authentication** | `auth`, `login`, `session`, `token`, `jwt` | Manages login flows, token generation, and user sessions. |
| **[Feature Group A]** | `[keyword_1]`, `[keyword_2]` | [Brief description]. |
| **External Integrations** | `client`, `service`, `adapter`, `api_key` | Manages communication with third-party APIs. |

---

## 3. Data Model Strategy
*Describes the core domain entities (abstracted from DB tables/collections).*

* **`User` Domain:** Represents the system actor.
* **`[Core Entity]` Domain:** Represents the primary business object.
* **`Log/Audit` Domain:** Represents immutable records for tracking.

---

## 4. API Interface Strategy
*Describes the core API endpoint categories.*

* **Public API:** Open endpoints.
* **Private API:** Authenticated endpoints for standard users.
* **Admin API:** Privileged endpoints for management.
* **Webhook API:** Endpoints for external callbacks.
* **Feature A API:** This API is for feature A.
* **Feature B API:** This API is for feature B.

> If the project has no HTTP API (e.g., CLI tool, library), replace this section
> with the relevant interface type (CLI commands, exported modules, etc.).

---

## 5. Coding Patterns & Search Strategy
*Standard patterns used in the codebase and how to locate them.*

| Pattern Name | Purpose | Search Keywords / Suffixes |
| :--- | :--- | :--- |
| **Service Objects** | Encapsulates complex business logic or multi-step operations. | `*Service`, `*Manager`, `call`, `execute` |
| **Query Objects** | Isolates complex database queries from controllers/handlers. | `*Query`, `scope`, `repository`, `find_by` |
| **Form/Policy Objects** | Handles authorization rules or specific input validations. | `*Policy`, `*Form`, `validate`, `authorize` |
| **Decorators/Presenters** | Formats data for the view/API response layer. | `*Decorator`, `*Serializer`, `*Presenter`, `to_json` |
| **Workers/Jobs** | Handles asynchronous background tasks. | `*Worker`, `*Job`, `perform`, `async`, `queue` |

> Adapt pattern names and keywords to the project's actual conventions.
> Not all projects use all patterns — omit rows that don't apply and add
> project-specific patterns that are discovered during scanning.

---

## 6. Testing Strategy & Tech Stack
*Tools and conventions for ensuring code quality.*

### Core Stack
* **Framework:** [test framework — e.g., Jest, pytest, RSpec, Go testing]
* **Data Seeding:** [if found — e.g., factories, fixtures, seeds]
* **External HTTP:** [mock approach — e.g., nock, VCR, responses, httptest]
* **Code Coverage:** [if found — e.g., Istanbul, coverage.py, SimpleCov]

> If no test framework is detected, note "No test framework detected" and
> mention any related config files or scripts that suggest testing intent.

### Testing Conventions
1. **Models/Entities:** Test validations, associations, and custom queries.
2. **Services/Use Cases:** Test the primary method in isolation.
3. **Requests/Controllers:** Test API response status codes and payload structure.
4. **External APIs:** Use mocking/recording to avoid hitting real endpoints in CI.

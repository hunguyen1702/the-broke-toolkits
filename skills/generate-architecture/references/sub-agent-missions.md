# Sub-Agent Missions for Scan & Fill

Detailed instructions for each of the 6 parallel sub-agents.

## Common Instructions for ALL Sub-Agents

**Tools to use:**
- **Glob** — find files by name pattern (e.g., `**/*.py`, `**/package.json`)
- **Grep** — search file contents for keywords and patterns
- **Read** — read specific files when you need to inspect contents (e.g., dependency files, config)

**Depth guidelines:**
- Start broad: use Glob and Grep to identify relevant files across the entire project
- Read dependency/config files fully (they're usually small and information-dense)
- For source files, scan enough to identify patterns — you don't need to read every file, but sample from different directories to catch variations
- If initial searches return nothing, try alternative keywords or file patterns before concluding something doesn't exist

**Handling missing sections:**
- If you can't find evidence of something (e.g., no async processing, no test framework), report "Not detected" rather than omitting it — this tells the reader the scan was done and nothing was found

**Output rules:**
1. **HIGH-LEVEL ONLY** — No file paths, no code snippets in your output
2. **Search keywords** — Provide patterns for searching, not locations
3. **Adapt to the project** — Use the language/framework conventions you actually find, not generic Ruby/Rails examples
4. **Return structured** — Use the markdown format specified for your section

---

## SUB-AGENT 1: High-Level Stack

**Mission:** Fill Section 1 with tech stack info

**Search strategy:**
1. Glob for package/dependency files: `{package.json,Gemfile,requirements.txt,go.mod,Cargo.toml,pom.xml,build.gradle,*.csproj,pyproject.toml,composer.json}`
2. Glob for infra config: `{docker-compose*,Dockerfile*,.env.example,*.dockerfile,serverless.yml,fly.toml,vercel.json,render.yaml,Procfile}`
3. Read the main dependency file to identify framework, database drivers, async libraries
4. Grep for database connection patterns: `database`, `mongo`, `redis`, `postgres`, `sqlite`, `mysql`

**Fill:**
- Backend framework and language
- Database (check drivers/adapters in dependencies)
- Async processing (background job libraries, message queues — or "Not detected")
- Infrastructure hints (containerization, cloud platform, deployment config — or "Not detected")

**Return format:**
```markdown
## 1. High-Level Stack
* **Backend:** [framework detected]
* **Database:** [database detected]
* **Async Processing:** [if found, or "Not detected"]
* **Infrastructure:** [if found, or "Not detected"]
```

---

## SUB-AGENT 2: Logic & Feature Mapping

**Mission:** Fill Section 2 — map PRD features to search keywords

**Process:**
1. Read the PRD to extract the list of features/requirements
2. For EACH feature, use Grep to search the codebase for related terms
3. Identify the actual keywords, module names, and class name patterns used in the code
4. Add a responsibility description for each mapping

**Important:** The keywords you provide should be ones that actually appear in the codebase (or close variants). Don't invent keywords — search and verify.

**Return format:**
```markdown
| Feature | Search Keywords | Responsibility |
| [Name] | `keyword1`, `keyword2` | [Description] |
```

---

## SUB-AGENT 3: Data Model Strategy

**Mission:** Fill Section 3 with domain entities

**Search strategy:**
1. Grep for model/entity definitions: class names containing `Model`, schema definitions, type definitions
2. Glob for model directories: `**/models/**`, `**/entities/**`, `**/schemas/**`, `**/types/**`
3. Check for database migrations/schema files to understand the data layer
4. Look for ORM usage patterns (ActiveRecord, Sequelize, SQLAlchemy, Prisma, GORM, etc.)

**Fill:**
- Core domain entities (abstracted — use domain names, not table names)
- Brief description of each entity's role
- Key relationships between entities (conceptual, e.g., "User has many Orders")

**Return format:**
```markdown
* **`EntityName` Domain:** [Description and key relationships]
```

---

## SUB-AGENT 4: API Interface Strategy

**Mission:** Fill Section 4 with API types

**Search strategy:**
1. Grep for route definitions: `route`, `router`, `endpoint`, `controller`, `handler`, `get(`, `post(`, `@app.route`, `@GetMapping`
2. Glob for route files: `**/routes/**`, `**/controllers/**`, `**/handlers/**`, `**/api/**`
3. Look for API documentation: `**/swagger*`, `**/openapi*`, `**/api-docs*`
4. Check for middleware patterns that indicate auth boundaries (public vs private)

**Categorize by:** Public, Private/Authenticated, Admin, Webhook, Feature-specific

**If no HTTP API exists** (e.g., the project is a CLI tool, library, or desktop app):
- Document the actual interface type instead (CLI commands, exported modules, IPC, etc.)
- Note "No HTTP API detected — documenting [interface type] instead"

**Return format:**
```markdown
* **[API Type]:** [Description and scope]
```

---

## SUB-AGENT 5: Coding Patterns & Search Strategy

**Mission:** Fill Section 5 with patterns and search keywords

**Search strategy:**
1. Grep for common pattern suffixes in the project's language:
   - Services: `*Service`, `*Manager`, `*UseCase`, `*Interactor`
   - Queries: `*Query`, `*Repository`, `*Finder`
   - Validation: `*Policy`, `*Form`, `*Validator`, `*Guard`
   - Presentation: `*Decorator`, `*Serializer`, `*Presenter`, `*DTO`, `*ViewModel`
   - Background: `*Worker`, `*Job`, `*Task`, `*Consumer`, `*Handler`
2. Also look for project-specific patterns that don't fit standard categories
3. Verify each pattern actually exists in the codebase before including it

**Important:** Only include patterns you actually find evidence of. Don't list patterns that don't exist in the project — this misleads agents into searching for things that aren't there.

**Return format:**
```markdown
| Pattern Name | Purpose | Search Keywords |
| [Name] | [Purpose] | `*Suffix`, `keyword` |
```

---

## SUB-AGENT 6: Testing Strategy

**Mission:** Fill Section 6 with test stack

**Search strategy:**
1. Glob for test config files: `{jest.config*,.rspec,pytest.ini,setup.cfg,pyproject.toml,*_test.go,*.test.*,*.spec.*}`
2. Glob for test directories: `{test,tests,spec,specs,__tests__}/**`
3. Read the test config file to identify the framework, coverage tools, and plugins
4. Grep for mocking/stubbing patterns: `mock`, `stub`, `fake`, `spy`, `nock`, `vcr`, `httptest`
5. Check dependency files for test-related packages

**Fill:**
- Test framework
- Data seeding approach (factories, fixtures, seeds — or "Not detected")
- External HTTP mocking approach (or "Not detected")
- Code coverage tool (or "Not detected")

**If no test framework is detected:** Note this explicitly and mention any test-like files or scripts that suggest partial testing intent.

**Return format:**
```markdown
### Core Stack
* **Framework:** [test framework, or "Not detected"]
* **Data Seeding:** [if found, or "Not detected"]
* **External HTTP:** [mock approach, or "Not detected"]
* **Code Coverage:** [if found, or "Not detected"]
```

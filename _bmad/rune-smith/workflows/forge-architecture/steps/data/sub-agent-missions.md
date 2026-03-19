# Sub-Agent Missions for Scan & Fill

**Purpose:** Detailed instructions for each of the 6 parallel sub-agents.

---

## SUB-AGENT 1: High-Level Stack

**Mission:** Fill Section 1 with tech stack info

**Search for:**
- Package files (package.json, Gemfile, requirements.txt, go.mod, etc.)
- Config files (docker-compose, Dockerfile, .env.example)
- README for tech mentions

**Fill:**
- Backend framework
- Database
- Async processing (if any)
- Infrastructure hints

**Return format:**
```markdown
## 1. High-Level Stack
* **Backend:** [framework detected]
* **Database:** [database detected]
* **Async Processing:** [if found]
* **Infrastructure:** [if found]
```

---

## SUB-AGENT 2: Logic & Feature Mapping

**Mission:** Fill Section 2 - map PRD features to search keywords

**Process:**
1. List features from PRD
2. For EACH feature, identify search keywords (NOT paths!)
3. Add responsibility description

**Return format:**
```markdown
| Feature | Search Keywords | Responsibility |
| [Name] | `keyword1`, `keyword2` | [Description] |
```

---

## SUB-AGENT 3: Data Model Strategy

**Mission:** Fill Section 3 with domain entities

**Search for:**
- Model/Entity definitions
- Database schema/migrations
- Type definitions

**Fill:**
- Core domain entities (abstracted, not table names)
- Entity relationships (conceptual)

**Return format:**
```markdown
* **`EntityName` Domain:** [Description]
```

---

## SUB-AGENT 4: API Interface Strategy

**Mission:** Fill Section 4 with API types

**Search for:**
- Route definitions
- Controller/Handler patterns
- API documentation

**Categorize by:** Public, Private, Admin, Webhook, Feature-specific

**Return format:**
```markdown
* **[API Type]:** [Description]
```

---

## SUB-AGENT 5: Coding Patterns & Search Strategy

**Mission:** Fill Section 5 with patterns and search keywords

**Search for:**
- Service Objects (`*Service`, `*Manager`)
- Query Objects (`*Query`, `*Repository`)
- Form/Policy Objects (`*Policy`, `*Form`)
- Decorators/Presenters (`*Decorator`, `*Serializer`)
- Workers/Jobs (`*Worker`, `*Job`)

**Return format:**
```markdown
| Pattern Name | Purpose | Search Keywords |
| [Name] | [Purpose] | `*Suffix`, `keyword` |
```

---

## SUB-AGENT 6: Testing Strategy

**Mission:** Fill Section 6 with test stack

**Search for:**
- Test config files (jest.config, rspec, pytest.ini)
- Test directories structure
- Mock/stub patterns

**Return format:**
```markdown
### Core Stack
* **Framework:** [test framework]
* **Data Seeding:** [if found]
* **External HTTP:** [mock approach]
* **Code Coverage:** [if found]
```

---

## Critical Rules for ALL Sub-Agents

1. **HIGH-LEVEL ONLY** - No file paths, no code snippets
2. **Search keywords** - Provide patterns for searching, not locations
3. **Thorough analysis** - DO NOT BE LAZY, scan thoroughly
4. **Return structured** - Use the format specified above

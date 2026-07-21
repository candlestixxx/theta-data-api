# Memory File — theta-data-api

## Architecture
- **Framework**: NestJS (Node.js)
- **Database**: TypeORM with PostgreSQL (ormconfig.json)
- **API**: GraphQL with Apollo (auth.resolver.ts)
- **Auth**: JWT-based with local strategy, guards
- **Domain**: Theta blockchain transaction monitoring and analysis

## Key Modules
| Module | Purpose |
|--------|---------|
| `auth/` | JWT authentication with local strategy, GraphQL guards |
| `tx/` | Transaction models, hourly statistics, entity definitions |
| `microservice/tx-monitor/` | Microservice controller for transaction monitoring |
| `common/` | Shared constants and code enumerations |

## Data Models
- `theta-tx.model.ts` — Individual Theta transactions
- `theta-tx-list.model.ts` — Paginated transaction lists
- `theta-tx-num-by-hours.entity.ts` — Hourly transaction counts
- `period-statistics.model.ts` — Period-based transaction statistics

## Design Preferences
- NestJS CLI-generated structure maintained
- TypeORM entities with decorator-based schema definitions
- JWT auth on GraphQL resolvers via custom guards
- Microservice pattern for transaction monitoring

---

*Last updated: 2026-07-20*

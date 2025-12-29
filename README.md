# Playwright TypeScript POM Framework

Minimal starter framework using Playwright + TypeScript and Page Object Model (POM).

## Requirements
- Node.js 16+ (LTS)
- npm

## Install
1. Install dependencies:

```powershell
npm install
```

2. Install Playwright browsers:

```powershell
npx playwright install
```

## Run tests
- Run all tests (headless):

```powershell
npm test
# or
npx playwright test
```

- Run tests in headed mode (see browser):

```powershell
npx playwright test --headed --workers=1
```

- Run a specific test file:

```powershell
npx playwright test tests/login.spec.ts
```

- Debug with Playwright Inspector:

```powershell
npx playwright test --debug tests/login.spec.ts
# or set env and run in PowerShell
$env:PWDEBUG = "1"; npx playwright test tests/login.spec.ts
```

- Show HTML report after a run:

```powershell
npm run test:report
# or
npx playwright show-report
```

## Project structure
- `src/pages` — Page Object Model classes (e.g. `LoginPage.ts`)
- `src/data` — Domain data and error messages (`Users.ts`, `Errors.ts`)
- `tests` — Playwright test suites (feature per file)
- `tests/fixtures.ts` — custom fixtures (e.g. `loginPage`)

## Conventions
- One test file per feature (e.g. `login.spec.ts`).
- Use POM methods and getters for locators and actions.
- Domain data lives in `src/data`.

## Notes
- Base URL is configured in `playwright.config.ts`.
- Comments and files use English.

## Next steps (suggested)
- Add linting (ESLint) and formatting (Prettier).
- Add CI workflow to run tests on push.
- Add additional pages and fixtures as needed.


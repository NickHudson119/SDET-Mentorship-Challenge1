SDET Mentorship Challenge
Overview

This project demonstrates a test automation framework built with TypeScript and Playwright. It includes UI testing, API testing, object-oriented programming, Page Object Model (POM), reusable fixtures, data-driven testing, and BDD with Gherkin and Cucumber.

Technologies
TypeScript
Playwright
Cucumber and Gherkin
Zod for API response validation
JSON test data and environment configuration
Project Structure
POM/ — Page Object Model classes
tests/ — UI, API, and OOP tests
features/ — Gherkin feature files
features/step-definitions/ — TypeScript implementations of Gherkin steps
fixtures/ — Custom Playwright fixtures
models/ — TypeScript interfaces, classes, and response schemas
configs/ — Environment configuration
testData/ — JSON test data
utils/ — Reusable helper functions and custom assertions
Installation

Clone the repository and install its dependencies:

git clone https://github.com/NickHudson119/SDET-Mentorship-Challenge1.git
cd SDET-Mentorship-Challenge1
npm install
npx playwright install
Running Tests

Run the complete Playwright test suite:

npm test

Run the Gherkin BDD scenario:

npm run test:bdd

Run Playwright tests for a specific browser:

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
Reports and Failure Artifacts

Open the HTML report after a Playwright run:

npx playwright show-report

The Playwright configuration is set up to capture screenshots on failure, traces on the first retry, and videos for failed tests.

Environment Configuration

The project contains JSON configuration files for the dev and qa environments. The environment can be selected with the TEST_ENV variable.

For PowerShell:

$env:TEST_ENV="dev"
npm test

For the QA environment:

$env:TEST_ENV="qa"
npm test
Test Coverage
UI form interactions and assertions
Object-oriented programming concepts and polymorphism
API POST and GET requests
Positive and negative API scenarios
Data-driven API tests
Chromium, Firefox, and WebKit browser projects
Gherkin BDD scenario execution
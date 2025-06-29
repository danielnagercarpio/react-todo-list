.PHONY: cr-app
cr-app:
	npm create vite@latest

.PHONY: run-app
run-app:
	cd react-todo-list/ && npm install && npm run dev

.PHONY: run-tests
run-tests:
	cd react-todo-list/ && npm test
	
.PHONY: run-test-reporter
run-test-reporter:
	cd react-todo-list/ && npx playwright test

.PHONY: run-reporter
run-reporter:
	cd react-todo-list/ && npx playwright show-report

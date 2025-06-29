import { defineConfig, devices } from "playwright/test";

export default defineConfig({
    testDir: './tests/e2e',
    timeout: 30 * 1000,
    retries: 1,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:5173',
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
    },
    projects: [
        {name:'chromium', use: devices['Desktop Chrome']},
        {name:'firefox', use: devices['Desktop Firefox']},
        {name:'webkit', use: devices['Desktop Safari']},
    ]
})
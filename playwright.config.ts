import { type PlaywrightTestConfig, devices } from "@playwright/test";
const config: PlaywrightTestConfig = {
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:3000/",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3000/",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
export default config;

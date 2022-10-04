import { test, expect } from "@playwright/experimental-ct-react";
import SomeComponent from "../components/component";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(SomeComponent());
  await expect(component).toContainText("some component");
});

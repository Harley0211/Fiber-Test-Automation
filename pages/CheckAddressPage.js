export async function checkAddress(name) {
  await page.goto("https://qlab02.fiber.t-mobile.com/check-address");

  await page.locator("#address").fill("61 delancey");

  await page.locator("option").first().click();

  await page.getByRole("combobox").click();

  await page.getByRole("option").first().click();

  await page.getByTesId("fca-btn").click();
}

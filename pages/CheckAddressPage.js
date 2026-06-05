export async function checkAddress(name) {
  await page.goto("https://qlab02.fiber.t-mobile.com/check-address");

  await page.locator("#address");

  await page.locator("option");
}

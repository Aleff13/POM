import extendedTest from '../../src/shared/extendedTest'

extendedTest('Example scenario extended test', async ({ adminPage, devPage }) => {
  await adminPage.goto("localhost:3000")
  await devPage.goto("localhost:3000")
})

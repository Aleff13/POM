import { test } from '@playwright/test'
import { AuthenticationPage } from '../../src/pages'
import { UserRole } from '../../src/shared'

test('setup admin for custom login screen', async ({ page }) => {
  const authPage = new AuthenticationPage(page)
  await authPage.visit()
  await authPage.login(UserRole.ADMIN)
})


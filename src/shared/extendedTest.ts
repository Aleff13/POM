import test, { Page } from '@playwright/test'
import { UserRole, authenticationFilesPath } from './constants'

const extendedTest = test.extend<{adminPage: Page, devPage: Page}> ({

    adminPage: async ({ browser }, use, options) => {
        const browserContext = await browser.newContext({
          storageState: authenticationFilesPath[UserRole.ADMIN],
        })
        
        const authPage = await browserContext.newPage()
        await use(authPage)
    },
  
    devPage: async ({ browser }, use, options) => {
      const browserContext = await browser.newContext({
        storageState: authenticationFilesPath[UserRole.DEVELOPER],
      })
      
      const authPage = await browserContext.newPage()
      await use(authPage)
    },
  })

export default extendedTest
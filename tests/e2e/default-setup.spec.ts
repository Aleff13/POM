import ExamplePage from '../../src/pages/example.page'
import { authenticationFilesPath } from '../../src/shared'
import { test } from '@playwright/test'

test('Example scenario with default setup', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: authenticationFilesPath.DEVELOPER,
  })

  const blankPageWithSession = await context.newPage()

  const testContext = {
    case: 'First case',
    title: 'some title',
    description: 'some description',
  }

  const example = new ExamplePage(blankPageWithSession)
})

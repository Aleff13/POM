import SessionPage from '../../src/pages/session.page'
import { test } from '@playwright/test'

test('Example scenario page with session decorator', async () => {
  const session = new SessionPage()
  await session.startWithSession()
  
  await session.visit()
})

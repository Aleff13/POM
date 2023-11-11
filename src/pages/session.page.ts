import { WithSession } from '../shared/decorators/auth.decorator'
import { Page } from '@playwright/test'
import dotenv from 'dotenv'
import { WithUrl } from '../shared/decorators/url.decorator'

dotenv.config()

interface IBasePage {
  page: Page
  visit: () => Promise<void>
}

@WithSession
@WithUrl("localhost:3000")
class SessionPage implements IBasePage {
  public page: Page

  public async startWithSession() {
    const { browser, page } = await this.session()
    this.page = page
  }

  public async visit(): Promise<void> {
    await this.page.goto(this.url)
  }
}

export default SessionPage

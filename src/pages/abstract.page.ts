import { Footer } from '../components'
import { Logger } from '../shared/logger'
import { Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

interface IBasePage {
  page: Page
  visit: () => Promise<void>
}

abstract class BasePage implements IBasePage {
  public page: Page
  public readonly footer: Footer
  public readonly logger: Logger
  protected abstract url: string

  //inject common components here
  constructor(page: Page) {
    this.page = page
    this.footer = new Footer(this.page)
    this.logger = new Logger()
  }

  public async visit(): Promise<void> {
    this.page.goto(this.url)
  }
}

export default BasePage

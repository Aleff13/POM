import { Page } from '@playwright/test'

interface IBaseComponent {
  page: Page
}

export abstract class BaseComponent implements IBaseComponent {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }
}

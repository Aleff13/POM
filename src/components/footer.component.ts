import { globalTimeout } from '../shared'
import { BaseComponent } from './abstract.component'
import { expect } from '@playwright/test'

export class Footer extends BaseComponent {
  private test = this.page.getByText(/test/)

  async assertTestBtnIsVisible(): Promise<void> {
    await expect(this.test).toBeVisible(globalTimeout)
  }

  async clickTestBtn(): Promise<void> {
    await this.test.click()
  }
}

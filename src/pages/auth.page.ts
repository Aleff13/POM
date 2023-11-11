import { UserRole, authenticationFilesPath } from '../shared'
import BasePage from './abstract.page'

export class AuthenticationPage extends BasePage {
  protected usernameInput = this.page.getByTestId('username')
  protected passwordInput = this.page.getByTestId('password')
  protected submitBtn = this.page.getByTestId('submit-button')
  public url = '/'

  async login(userType: UserRole, saveSession = true) {
    const { username, password, path } = this.getCredentials(userType)

    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitBtn.click()

    if (saveSession) await this.setSession(path)
  }

  protected credentials = {
    ADMIN: {
      username: process.env.E2E_ADMIN_USER,
      password: process.env.E2E_ADMIN_PASSWORD,
      path: authenticationFilesPath.ADMIN,
    },
    DEVELOPER: {
      username: process.env.E2E_DEV_USER,
      password: process.env.E2E_DEV_PASSWORD,
      path: authenticationFilesPath.DEVELOPER,
    },
    CUSTOMER: {
      username: process.env.E2E_CUSTOMER_USER,
      password: process.env.E2E_CUSTOMER_PASSWORD,
      path: authenticationFilesPath.CUSTOMER,
    },
  }

  protected async setSession(path: string) {
    await this.page.context().storageState({ path })
  }

  protected getCredentials(userType: UserRole) {
    const { username, password, path } = this.credentials[userType]

    if (!username || !password) {
      throw new Error(
        'Credentials not found, please provide username and password in .env',
      )
    }

    return { username, password, path }
  }
}

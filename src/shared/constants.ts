export const authenticationFilesPath = {
  ADMIN: 'src/sessions/admin.json',
  DEVELOPER: 'src/sessions/dev.json',
  CUSTOMER: 'src/sessions/customer.json',
}

export const globalTimeout = { timeout: 10000 }

export enum UserRole {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  CUSTOMER = 'CUSTOMER'
}

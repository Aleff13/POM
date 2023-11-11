import { Browser, chromium, Page } from '@playwright/test';
import { authenticationFilesPath, UserRole } from '../constants';

export function WithSession (target: any) {
    target.prototype.session = async function ():
        Promise<{ browser: Browser, page: Page}> {
        const browser = await chromium.launch()
        const browserContext = await browser.newContext({
            storageState: authenticationFilesPath.DEVELOPER, //change here to use another session
          })
        
        const page = await browserContext.newPage()
        return { browser, page }
    }
} 

export function Session (role: UserRole){
    return function (target: any) {
    target.prototype.session = async function ():
        Promise<{ browser: Browser, page: Page}> {
        const browser = await chromium.launch()
        const browserContext = await browser.newContext({
            storageState: authenticationFilesPath[role], //change here to use another session
          })
        
        const page = await browserContext.newPage()
        return { browser, page }
    }
} 
}
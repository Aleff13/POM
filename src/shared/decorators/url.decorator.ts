export function WithUrl (url: string) {
    return function (target: any) {
        target.prototype.url = url
    }
}

export class Logger {
  public logEvidence(title: string, message: string) {
    console.log(`\x1b[33m ${title}: ${message}\x1b[0m`)
  }
}

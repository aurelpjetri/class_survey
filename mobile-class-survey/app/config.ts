export class Config {

  static address = "localhost";
  static port = "3000"

  static getURL(): string {
    return Config.address + ":" + Config.port
  }
  
}

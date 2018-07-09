export class Config {

  static address;
  static port = 3000;

  static getURL(): string {
    return "http://" + Config.address + ":" + Config.port
  }

}

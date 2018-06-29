export class Config {

  static address;
  static port;

  static getURL(): string {
    return "http://" + Config.address + ":" + Config.port
  }

}

class Config {
  constructor() {
    const json = require('./config.json');

    this.developer_center_server = json.developer_center_server;
  }
}

const config = new Config();
export default config;

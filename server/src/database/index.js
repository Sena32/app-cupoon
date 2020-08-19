import Sequelize from "sequelize";
import Cupon from "../app/models/Cupon";
import databaseConfig from "../config/database";

const models = [Cupon];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();

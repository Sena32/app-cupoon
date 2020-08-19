import Sequelize, { Model } from "sequelize";

class Cupon extends Model {
  static init(sequelize) {
    super.init(
      {
        code: Sequelize.DataTypes.STRING,
        description: Sequelize.DataTypes.STRING,
        value: Sequelize.DataTypes.DECIMAL,
        expiration_date: Sequelize.DataTypes.DATE,
        use_date: Sequelize.DataTypes.DATE,
        status: Sequelize.DataTypes.ENUM("active", "expired", "utilized"),
      },
      {
        sequelize,
        tableName: "Cupons",
      }
    );
  }
}

export default Cupon;

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        isEven(value) {
          if (value < 1 || value > 5)
            throw new Error("The difficulty must be between 1 and 5");
        },
      },
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 24,
        isEven(value) {
          if (value < 1 || value > 24)
            throw new Error("The duration must be between 1 and 24");
        },
      },
      allowNull: true,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false
    }
  }, {
    timestamps: false,
  });
};



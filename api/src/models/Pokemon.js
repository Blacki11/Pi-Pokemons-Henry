const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//--OPCIONALES--
// Velocidad.
// Altura.
// Peso.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SpecialDefense: {
        type: DataTypes.INTEGER,
        type: DataTypes.STRING,
        allowNull: false,
      },
      SpecialAttack: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        unique: true,
      },
      Created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

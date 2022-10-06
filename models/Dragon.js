const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dragon extends Model { }

Dragon.init(
  {
    //I removed the 'id' field. Happy to let sequelize take care of this for me!
    //NOTE - the activities today define 'id' explicitly in this spot, which is also totally fine!
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    rider_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'characters',
        key: 'id'
      }
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'characters',
        key: 'id'
      }
    },
    color: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dragon',
  }
);

module.exports = Dragon;

module.exports = (sequelize, DataTypes) => {
  const tableUser = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'users'
  })
  tableUser.associate = (models) => {
    tableUser.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'blogposts'
    })
  }

  return tableUser;
}
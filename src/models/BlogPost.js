module.exports = (sequelize, DataTypes) => {
  const tableBlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    }
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  })
  tableBlogPost.associate = (models) => {
    tableBlogPost.belongsTo(models.User, 
    {
      foreignKey: 'userId', as: 'user'
    });
  }
  return tableBlogPost;
}
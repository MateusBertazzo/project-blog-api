module.exports = (sequelize, DataTypes) => {
  const tablePostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
  }
  )

  tablePostCategory.associate= (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: tablePostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blog_posts',
    })
    models.BlogPost.belongsToMany(models.Category, {
      through: tablePostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    })
  }
  return tablePostCategory;
}
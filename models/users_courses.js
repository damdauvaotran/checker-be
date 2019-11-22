module.exports = (sequelize, type) => {
    return sequelize.define('users_courses',
        {}, {
            createdAt: false,
            updatedAt: false,
            underscored: true,
            sequelize,
        });
};

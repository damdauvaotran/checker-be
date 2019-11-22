module.exports = (sequelize, type) => {
    return sequelize.define("users",
        {
            user_id: {
                type: type.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            username: {
                type: type.STRING,
                allowNull: false,
            },

            encrypted_password: {
                type: type.STRING,
                allowNull: false,
            },
            is_active: {
                type: type.INTEGER,
                allowNull: false,
            },
            name: {
                type: type.STRING,
            },
        },
        {
            underscored: true,
            sequelize,
        },
    );
};

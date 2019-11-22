module.exports = (sequelize, type) => {
    return sequelize.define("videos",
        {
            video_id: {
                type: type.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            video_name: {
                type: type.STRING,
                allowNull: false,
            },
            video_link: {
                type: type.STRING,
                allowNull: false,
            },
            lesson_id: {
                type: type.STRING,
                allowNull: false
            }
        }, {
            underscored: true,
            sequelize,
        });
};

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Form', {
        id: {
            type: DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id'
        },
        userId: {
            type: DataTypes.STRING(36),
            allowNull: false,
            field: '_user_id'
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'title'
        },
        codeId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'code_id'
        },
        renderType: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
            field: 'render_type'
        },
        pageContent: {
            type: "MEDIUMBLOB",
            allowNull: true,
            field: 'page_content'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at'
        }
    }, {
        tableName: 'forms'
    })
}

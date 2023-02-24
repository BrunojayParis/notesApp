import { DataTypes } from'sequelize'
import {sequelize} from '../database/database.js'

export const posts = sequelize.define('Posts', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postname: {
        type: DataTypes.STRING
    },
    postdescription: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

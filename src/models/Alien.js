import Sequelize from 'sequelize';
import { sequelize } from '../config/sqlite';

const Alien = sequelize.define('alien', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING },
});

export { Alien };
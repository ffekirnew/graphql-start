import Sequelize from 'sequelize';

const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite',
});

export { sequelize };
const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('Projeto_Sala', 'Murilo', 'murilomurilo',
{
    dialect: 'mssql', host:'localhost', port: 49709
});

database.sync();

module.exports = database;
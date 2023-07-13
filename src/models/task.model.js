module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define('tasks', {
        title:{
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.STRING
        }
    });

    return Task;
};
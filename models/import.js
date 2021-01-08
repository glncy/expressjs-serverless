const Sequelize = require('sequelize');
let models = {};
function getModels (config, force = false) {
    if (Object.keys(models).length && !force) {
        return models;
    }
  
    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.options
    );

    let modules = [
        // IMPORT MODELS HERE
        require('./user')
    ];

    modules.forEach((module) => {
        const model = module(sequelize, Sequelize);
        models[model.name] = model;
    });

    Object.keys(models).forEach((key) => {
        if ('associate' in models[key]) {
            models[key].associate(models);
        }
    });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    return models;
}

module.exports = {
    getModels
};
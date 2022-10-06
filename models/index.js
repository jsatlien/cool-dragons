const Dragon = require('./Dragon');
const Character = require('./Character');
const User = require('./User');

Character.hasOne(Dragon, {
    foreignKey: 'rider_id',
    as: 'rides',
    onDelete: 'SET NULL'
});

Dragon.belongsTo(Character, {
    foreignKey: 'rider_id'
});

Character.hasMany(Dragon, {
    foreignKey: 'trainer_id',
    as: 'trained_dragons',
    onDelete: 'SET NULL'
});

Dragon.belongsTo(Character, {
    foreignKey: 'trainer_id'
});

module.exports = { Dragon, Character, User };
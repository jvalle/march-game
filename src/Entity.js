
module.exports = Entity = function () {
    // generate a psuedo random ID
    this.id = (+new Date()).toString(16) + Entity.prototype._count++;

    this.components = {};

    return this;
};

// a persistent count
Entity.prototype._count = 0;

Entity.prototype.addComponent = function (component) {
    // Add component data to the entity
    this.components[component.name] = component;

    return this;
};

Entity.prototype.removeComponent = function (component) {
    // Remove component data by removing the reference to it
    var name = component;
    if (typeof name === 'function') {
        name = component.prototype.name;
    }

    delete this.components[name];

    return this;
};

Entity.prototype.print = function () {
    console.log(JSON.stringify(this, null, 4));

    return this;
};

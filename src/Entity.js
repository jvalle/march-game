var ECS = {};

ECS.Entity = function Entity () {
    // generate a psuedo random ID
    this.id = (+new Date()).toString(16) + (Math.random() * 1000000 | 0).toString(16) + ECS.Entity.prototype._count++;

    this.components = {};

    return this;
};

ECS.Entity.prototype._count = 0;

ECS.Entity.prototype.addComponent = function addComponent (component) {
    // Add component data to the entity
    this.components[component.name] = component;

    return this;
};

ECS.Entity.prototype.removeComponent = function removeComponent (component) {
    // Remove component data by removing the reference to it
    var name = component;
    if (typeof name === 'function') {
        name = component.prototype.name;
    }

    delete this.components[name];

    return this;
};

ECS.Entity.prototype.print = function print () {
    console.log(JSON.stringify(this, null, 4));

    return this;
};


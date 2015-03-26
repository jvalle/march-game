// Organize components here -- could modularize if necessary

var components = {};

components.Appearance = function (opts) {
    var options = opts || {};

    this.color = options.color;
    if (!this.color) {
        this.color = {
            r: Math.random() * 255 | 0,
            g: Math.random() * 255 | 0,
            b: Math.random() * 255 | 0
        };
    }

    this.size = options.size || (1 + (Math.random() * 30 | 0));

    return this;
}
components.Appearance.prototype.name = 'appearance';

components.Position = function (opts) {
    var options = opts || {};

    this.x = options.x || 20 + (Math.random() * 800 | 0);
    this.y = options.y || 20 + (Math.random() * 600 | 0);

    return this;
};
components.Position.prototype.name = 'position';

components.Velocity = function (opts) {
    var options = opts || {};

    this.x = options.x || Math.round(Math.random()) ? Math.random() * -1 : Math.random();
    this.y = options.y || Math.round(Math.random()) ? Math.random() * -1 : Math.random();

    return this;
};
components.Velocity.prototype.name = 'velocity';

components.Health = function (opts) {
    var options = opts || {};

    this.value = options.value || 100;

    return this;
};
components.Health.prototype.name = 'health';

components.PlayerControlled = function () {
    this.pc = true;

    return this;
};
components.PlayerControlled.prototype.name = 'playerControlled';

components.Collision = function () {
    this.collides = true;

    return this;
};
components.Collision.prototype.name = 'collision';

export default components;
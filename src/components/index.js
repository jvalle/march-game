// Organize components here -- could modularize if necessary

var components = {};

components.Appearance = function (opts) {
    var options = opts || {};

    this.colors = options.colors;
    if (!this.colors) {
        this.colors = {
            r: 0,
            g: 100,
            b: 150
        };
    }

    this.size = options.size || (1 + (Math.random() * 30 | 0));

    return this;
}
components.Appearance.prototype.name = 'appearance';

components.Health = function (opts) {
    var options = opts || {};

    this.value = options.value || 100;

    return this;
};
components.Health.prototype.name = 'health';

components.Position = function (opts) {
    var options = opts || {};

    this.x = options.x || 20 + (Math.random() * 100 | 0);
    this.y = options.y || 20 + (Math.random() * 100 | 0);

    return this;
};
components.Position.prototype.name = 'position';

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
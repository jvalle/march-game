// Organize components here -- could modularize if necessary

ECS.Components.Appearance = function ComponentAppearance (opts) {
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
ECS.Components.Appearance.prototype.name = 'appearance';

ECS.Components.Health = function ComponentHealth (opts) {
    var options = opts || {};

    this.value = options.value || 100;

    return this;
};
ECS.Components.Health.prototype.name = 'health';

ECS.Components.Position = function ComponentPosition (opts) {
    var options = opts || {};

    this.x = params.x || 20 + (Math.random() * (ECS.$canvas.width - 20) | 0);
    this.y = params.y || 20 + (Math.random() * (ECS.$canvas.height - 20) | 0);

    return this;
};
ECS.Components.Health.prototype.name = 'position';

ECS.Components.PlayerControlled = function ComponentPlayerControlled () {
    this.pc = true;

    return this;
};
ECS.Components.Health.prototype.name = 'playerControlled';

ECS.Components.Collision = function ComponentCollision (opts) {
    this.collides = true;

    return this;
};
ECS.Components.Health.prototype.name = 'collision';

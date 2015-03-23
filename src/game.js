import Entity from './Entity';
import components from './components/';
import systems from './systems/';

var Game = {

    canvas: null,
    context: null,
    entities: {},
    running: null,

    init: function (canvas) {
        // set canvas el
        if (!canvas) {
            throw new Error('Game must be initialized on a canvas element.');
        }
        this.canvas = canvas;
        // set ctx
        this.context = canvas.getContext('2d');

        // initialize entities
        this.addEntity({
            'Appearance': null,
            'Position' : null,
            'Velocity' : null
        }, 20);

        this.running = true;
        this.tick();
    },

    addEntity: function (comps, no) {
        var entity;

        if (no) {
            for (var i = 0; i < no; i++) {
                entity = new Entity();
                this.addComponents(entity, comps);
                this.entities[entity.id] = entity;
            }
        } else {
            entity = new Entity();
            this.addComponents(entity, comps);
            this.entities[entity.id] = entity;
        }
    },

    addComponents: function (ent, comps) {
        for (var comp in comps) {
            if (comps[comp]) {
                ent.addComponent(new components[comp](comps[comp]));
            } else {
                ent.addComponent(new components[comp]());
            }
        }
    },

    tick: function () {
        var self = this;

        // TODO: create a controller layer that decides which entities go to which system

        for (var system in systems) {
            systems[system](self.entities);
        }

        if (self.running) {
            window.requestAnimationFrame(this.tick.bind(self));
        }
    },

    endGame: function () {
        //endgame steps
        this.running = false;
    }
};

window.Game = Game;

// export default Game;
import Entity from './Entity';
import components from './components/';
import systems from './systems/';

var Game = (function (options) {
    var options  = options || {},
        entities = {};

    function init (canvas) {
        // set canvas el
        if (!canvas) throw new Error('Game must be initialized on a canvas element.');
        if (options.running) throw new Error('Game is already running, homie!');

        options.canvas = canvas;
        // set ctx
        options.context = canvas.getContext('2d');

        // initialize entities
        addEntity({
            'Appearance': null,
            'Position' : null,
            'Velocity' : null
        }, 20);

        options.running = true;
        tick();
    }

    function addEntity (comps, no) {
        var entity;

        if (no) {
            for (var i = 0; i < no; i++) {
                entity = new Entity();
                addComponents(entity, comps);
                entities[entity.id] = entity;
            }
        } else {
            entity = new Entity();
            addComponents(entity, comps);
            entities[entity.id] = entity;
        }
    }

    function addComponents (ent, comps) {
        for (var comp in comps) {
            if (comps[comp]) {
                ent.addComponent(new components[comp](comps[comp]));
            } else {
                ent.addComponent(new components[comp]());
            }
        }
    }

    function tick () {
        var self = this;
        // TODO: create a controller layer that decides which entities go to which system

        for (var system in systems) {
            systems[system](entities, options);
        }

        if (options.running) {
            window.requestAnimationFrame(tick.bind(self));
        }
    }

    return {
        init: init
    };

})();

window.Game = Game;
import Entity from './Entity';
import components from './components/';
import systems from './systems/';

const Game = ((options) => {
    var options  = options || {},
          entities = {};

    function init (canvas) {
        // set canvas el
        if (!canvas) throw new Error('Game must be initialized on a canvas element.');
        if (options.running) throw new Error('Game is already running, homie!');

        // set canvas
        options.canvas = canvas;
        // set ctx
        options.context = canvas.getContext('2d');

        // initialize entities
        for (let i = 1; i < 11; i++) {
            addEntity({
                'Appearance': {
                    size: 10,
                    color: {
                        r: 255,
                        g: i * 20,
                        b: 0
                    }
                },
                'Position': {
                    x: i * 63 + (i - 1) * 10,
                    y: 100
                },
                'Velocity': {
                    x: 0,
                    y: 1
                }
            });

            addEntity({
                'Appearance': {
                    size: 10,
                    color: {
                        r: 0,
                        g: i * 20,
                        b: 255
                    }
                },
                'Position': {
                    x: i * 63 + (i - 1) * 10,
                    y: 500
                }
            });
        }

        options.running = true;
        tick();
    }

    function addEntity (comps, no) {
        var entity;

        if (no) {
            for (let i = 0; i < no; i++) {
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
        for (let comp in comps) {
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

        for (let system in systems) {
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
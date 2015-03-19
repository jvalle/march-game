import Entity from './Entity';
import components from './components/';
import systems from './systems/';

var Game = {

    canvas: null,
    context: null,
    entities: {},
    runSys: [],
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
            'Position' : {
                x: 20 + Math.random() * (this.canvas.width - 20) | 0,
                y: 20 + Math.random() * (this.canvas.height - 20) | 0
            }
        }, 20);

        this.assignSystems();
        this.running = true;
        this.tick();
    },

    // The add Entity function takes a components object with the components that you'd like
    // to add to the entity.  You can pass an options object along to define the component
    // properties, or null for the default component properties.  Of the following form:
    //
    // {
    //     'Appearance': null,
    //     'Position' : {
    //         x: 20 + Math.random() * (this.canvas.width - 20) | 0,
    //         y: 20 + Math.random() * (this.canvas.height - 20) | 0
    //     }
    // }
    //
    // addEntity also takes an optional no parameter, if passed it will add that number of entities.

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

    assignSystems: function () {
        // setup systems
        if (!systems) throw new Error('You must have at least 1 system defined.')
        for (var system in systems) {
            this.runSys.push(system);
        }
    },

    tick: function () {
        // TODO: create a controller layer that decides which entities go to which system
        for (var i = 0; i < this.runSys.length; i++) {
            this.runSys[i](this.entities);
        }

        if (this.running) {
            window.requestAnimationFrame(this.tick);
        }
    },

    endGame: function () {
        //endgame steps
        this.running = false;
    }
};

window.Game = Game;

export default Game;
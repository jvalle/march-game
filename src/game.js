import Entity from './Entity';

var Game = {

    canvas: null,
    context: null,

    init: function (canvas) {
        // set canvas el
        if (!canvas) {
            throw new Error('Game must be initialized on a canvas element.');
        }
        this.canvas = canvas;
        // set ctx
        this.context = canvas.getContext('2d');
        // initialize entities
    }
};

window.Game = Game;

export default Game;
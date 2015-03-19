// a render system
// import Game from '../game'

function clearCanvas () {
    Game.context.save();
    Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    Game.context.restore();
}

export default function (entities) {
    clearCanvas();

    var curEntity, curComps, fillStyle;

    // iterate over all entities
    for (var entityId in entities) {
        curEntity = entities[entityId],
        curComps  = curEntity.components;

        // Only run logic if relevant components exist on entity
        if (curComps.appearance && curComps.position) {
            fillStyle = 'rgba(' + [
                curComps.appearance.color.r,
                curComps.appearance.color.g,
                curComps.appearance.color.b,
            ] + ', 1)';

            Game.context.fillStyle = fillStyle;

            Game.context.fillRect(
                curComps.position.x - curComps.appearance.size,
                curComps.position.y - curComps.appearance.size,
                curComps.appearance.size * 2,
                curComps.appearance.size * 2
            );
        }
    }
};

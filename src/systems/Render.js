
function clearCanvas (options) {
    options.context.save();
    options.context.clearRect(0, 0, options.canvas.width, options.canvas.height);
    options.context.restore();
}

export default function (entities, options) {
    clearCanvas(options);

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

            options.context.fillStyle = fillStyle;

            options.context.fillRect(
                curComps.position.x - curComps.appearance.size,
                curComps.position.y - curComps.appearance.size,
                curComps.appearance.size * 2,
                curComps.appearance.size * 2
            );
        }
    }
};

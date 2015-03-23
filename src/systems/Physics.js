// Physics system -- currently only handling velocity.

export default function (entities) {

    var curEntity, curComps;

    for (var entityId in entities) {
        curEntity = entities[entityId];
        curComps  = curEntity.components;

        if (curComps.position && curComps.velocity) {
            curComps.position.x += curComps.velocity.x;
            curComps.position.y += curComps.velocity.y;
        }
    }
};
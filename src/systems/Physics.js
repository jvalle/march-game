// Physics system -- currently only handling velocity.

export default (entities) => {

    var curEntity, curComps;

    for (let entityId in entities) {
        curEntity = entities[entityId];
        curComps  = curEntity.components;

        if (curComps.position && curComps.velocity) {
            curComps.position.x += curComps.velocity.x;
            curComps.position.y += curComps.velocity.y;
        }
    }
};
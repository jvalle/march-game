// a user input system

var currentKeys = {},
    tick_count = 0,
    speed = 10;

var keyMap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

function init () {
    document.addEventListener('keydown', setKey);
};

function setKey (evt) {
    currentKeys[keyMap[evt.keyCode]] = true;
};

export default (entities, options) => {
    // init our system, if the first tick
    if (tick_count === 0) init();

    var curEntity, curComps;

    // iterate over all entities
    for (var entityId in entities) {
        curEntity = entities[entityId],
        curComps  = curEntity.components;

        if (curComps.playerControlled) {
            if (currentKeys.up) curComps.position.y -= speed;
            if (currentKeys.down) curComps.position.y += speed;
            if (currentKeys.left) curComps.position.x -= speed;
            if (currentKeys.right) curComps.position.x += speed;
        }
    }

    currentKeys = {};
    tick_count++;
};
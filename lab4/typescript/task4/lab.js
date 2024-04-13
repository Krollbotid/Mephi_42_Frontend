function distance(x1OrP1, y1OrP2, x2, y2) {
    var dx, dy;
    if (typeof x1OrP1 === 'number' && typeof y1OrP2 === 'number' && x2 !== undefined && y2 !== undefined) {
        dx = x2 - x1OrP1;
        dy = y2 - y1OrP2;
    }
    else if (typeof x1OrP1 === 'object' && typeof y1OrP2 === 'object') {
        dx = y1OrP2.x - x1OrP1.x;
        dy = y1OrP2.y - x1OrP1.y;
    }
    else {
        throw new Error('Invalid arguments');
    }
    return Math.sqrt(dx * dx + dy * dy);
}
var d1 = distance(0, 0, 3, 4);
var d2 = distance({ x: 0, y: 0 }, { x: 3, y: 4 });
// npx -p typescript tsc lab.ts --watch

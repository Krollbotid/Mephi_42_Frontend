type Point = {
    x: number;
    y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(x1OrP1: number | Point, y1OrP2: number | Point, x2?: number, y2?: number): number {
    let dx : number, dy : number;
    if (typeof x1OrP1 === 'number' && typeof y1OrP2 === 'number' && x2 !== undefined && y2 !== undefined) {
        dx = x2 - x1OrP1;
        dy = y2 - y1OrP2;
    } else if (typeof x1OrP1 === 'object' && typeof y1OrP2 === 'object') {
        dx = y1OrP2.x - x1OrP1.x;
        dy = y1OrP2.y - x1OrP1.y;
    } else {
        throw new Error('Invalid arguments');
    }
    return Math.sqrt(dx * dx + dy * dy);
}

const d1 = distance(0, 0, 3, 4);
const d2 = distance({ x: 0, y: 0 }, { x: 3, y: 4 });


// npx -p typescript tsc lab.ts --watch
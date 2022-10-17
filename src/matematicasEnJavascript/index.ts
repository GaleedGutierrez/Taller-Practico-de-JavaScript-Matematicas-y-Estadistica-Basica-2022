const calculateTriangle = (side1: number, side2: number, sideBase: number, height: number) => {
    const PERIMETER = side1 + side2 + sideBase;
    const AREA = sideBase * height / 2;
    return {
        PERIMETER,
        AREA
    };
};

const calculateSquare = (side: number) => {
    const PERIMETER = side * 4;
    const AREA = side * side;
    return {
        PERIMETER,
        AREA
    };
};

const SIDE_SQUARE = 5;
const PERIMETER_SQUARE = SIDE_SQUARE * 4;

const AREA_SQUARE = SIDE_SQUARE ** 2;

const SIDE_TRIANGLE_1 = 6;
const SIDE_TRIANGLE_2 = 6;
const SIDE_TRIANGLE_BASE = 4;
const HEIGHT_TRIANGLE = 5.5;
const PERIMETER_TRIANGLE = SIDE_TRIANGLE_1 + SIDE_TRIANGLE_2 + SIDE_TRIANGLE_BASE;
const AREA_TRIANGLE = SIDE_TRIANGLE_BASE * HEIGHT_TRIANGLE / 2;

// console.log({SIDE_SQUARE,
//     AREA_SQUARE,
//     SIDE_TRIANGLE_1,
//     SIDE_TRIANGLE_2,
//     SIDE_TRIANGLE_BASE,
//     HEIGHT_TRIANGLE,
//     PERIMETER_TRIANGLE,
//     AREA_TRIANGLE,
// });

console.group('Triangulo');
const TRIANGULE = calculateTriangle(SIDE_TRIANGLE_1, SIDE_TRIANGLE_2, SIDE_TRIANGLE_BASE, HEIGHT_TRIANGLE);
console.log(TRIANGULE);
console.groupEnd();

console.group('Cuadrado');
const SQUARE = calculateSquare(SIDE_SQUARE);
console.log(SQUARE);
console.groupEnd();

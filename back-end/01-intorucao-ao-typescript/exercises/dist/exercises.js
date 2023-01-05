"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circuloArea = exports.trapezioArea = exports.losangoArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, heigth) {
    return base * heigth;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function losangoArea(D, d) {
    return (D * d) / 2;
}
exports.losangoArea = losangoArea;
function trapezioArea(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezioArea = trapezioArea;
function circuloArea(r) {
    return 3.14 * (r ** 2);
}
exports.circuloArea = circuloArea;

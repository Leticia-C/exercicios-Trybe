export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, heigth: number): number {
  return base * heigth;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
    return sides.reduce((acc, side) => acc + side, 0);
  }

  export function triangleCheck(
    sideA: number,
    sideB: number,
    sideC: number
  ): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
  }

export function losangoArea(D : number, d: number): number{
    return (D * d) / 2 ;
}

export function trapezioArea(B : number, b: number, h: number): number {
    return ((B + b) * h) / 2;
}

export function circuloArea(r: number): number {
    return  3.14 * (r **2)
}
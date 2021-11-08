import type { Matrix, Verticle } from './types';

export const verticleDegree = (verticle: Verticle) =>
    verticle.reduce(
        (prev, curr) => curr > 0 ? prev + 1 : prev,
        0
    );

export const degreeSequence = (graph: Matrix) =>
    graph
        .map((verticle: Verticle) => verticleDegree(verticle))
        .sort((a, b) => b - a);

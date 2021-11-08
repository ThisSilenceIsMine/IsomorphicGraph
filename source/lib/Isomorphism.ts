import { Matrix } from './types';
import { degreeSequence } from './GraphDegree';

export const edgeCount = (V: Matrix) =>
    degreeSequence(V).reduce((prev, curr) => prev + curr, 0) / 2;

export const isIsomorphic = (V: Matrix, G: Matrix): boolean => {
    if (V.length != G.length) return false;

    const dimension = V.length;

    if (
        V.some((verticle) => verticle.length !== dimension) &&
        G.some((verticle) => verticle.length !== dimension)
    ) {
        return false;
    }

    if (edgeCount(V) !== edgeCount(G)) {
        return false;
    }

    const degreeSequenceV = degreeSequence(V);
    const degreeSequenceG = degreeSequence(G);

    return (
        degreeSequenceV.length === degreeSequenceG.length &&
        degreeSequenceV.every((val, idx) => val === degreeSequenceG[idx])
    );
};

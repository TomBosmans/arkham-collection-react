/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PackTreeEntity = {
    id: string;
    parentId: string;
    name: string;
    position: number;
    cyclePosition: number;
    availableAt: any;
    known: number;
    total: number;
    children: Array<PackTreeEntity>;
};

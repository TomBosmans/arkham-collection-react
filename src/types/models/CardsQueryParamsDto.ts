/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationParamsDto } from './PaginationParamsDto';

export type CardsQueryParamsDto = {
    name?: string;
    xp?: Array<number>;
    traits?: Array<string>;
    packIds?: Array<string>;
    factionNames?: Array<string>;
    encounterNames?: Array<string>;
    typeNames?: Array<string>;
    pagination?: PaginationParamsDto;
    sort?: string;
};

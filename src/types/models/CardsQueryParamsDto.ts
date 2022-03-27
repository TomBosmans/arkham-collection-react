/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationParamsDto } from './PaginationParamsDto';

export type CardsQueryParamsDto = {
    name?: string;
    traits?: Array<string>;
    pagination?: PaginationParamsDto;
    sort?: string;
};

import type { ISO_3166_1 } from '../ISO_3166_1';
import { ISO_3166_1__MAP } from '../ISO_3166_1';
import type { ISO_3166_2, ISO_3166_2_CA, ISO_3166_2_US } from '../ISO_3166_2';
import {
  ISO_3166_2__MAP,
  ISO_3166_2_CA__MAP,
  ISO_3166_2_US__MAP,
} from '../ISO_3166_2';

export const isISO_3166_1 = (
  code: string | ISO_3166_1 | null | undefined
): code is ISO_3166_1 =>
  code ? Object.keys(ISO_3166_1__MAP).includes(code) : false;

export const isISO_3166_2 = (
  code: string | ISO_3166_2 | null | undefined
): code is ISO_3166_2 =>
  code ? Object.keys(ISO_3166_2__MAP).includes(code) : false;

export const isISO_3166_2_CA = (
  code: string | ISO_3166_2_CA | null | undefined
): code is ISO_3166_2_CA =>
  code ? Object.keys(ISO_3166_2_CA__MAP).includes(code) : false;

export const isISO_3166_2_US = (
  code: string | ISO_3166_2_US | null | undefined
): code is ISO_3166_2_US =>
  code ? Object.keys(ISO_3166_2_US__MAP).includes(code) : false;

export const isISO_3166 = (
  code: string | ISO_3166_1 | ISO_3166_2 | null | undefined
): code is ISO_3166_1 | ISO_3166_2 => isISO_3166_1(code) || isISO_3166_2(code);

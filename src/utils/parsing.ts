import {
  assertExists,
  assertIsISO_3166,
  assertIsISO_3166_1,
  assertIsISO_3166_2,
} from './assertions';
import type { ISO_3166_1 } from '../ISO_3166_1';
import type { ISO_3166_2 } from '../ISO_3166_2';
import { ISO_3166_1__MAP } from '../ISO_3166_1';
import { ISO_3166_2__MAP } from '../ISO_3166_2';

export interface ParsedISO_3166_2 {
  countryCode: ISO_3166_1;
  country: string;
  regionCode: ISO_3166_2;
  region: string;
}

/**
 * @param code
 * @throws {Error}
 */
export const parseISO_3166_2 = (
  code: string | ISO_3166_2 | null | undefined
): ParsedISO_3166_2 => ({
  countryCode: assertIsISO_3166_1(code?.slice(0, 2)),
  country: ISO_3166ToCountryName(code),
  regionCode: assertIsISO_3166_2(code),
  region: ISO_3166_2ToRegionName(code),
});

/**
 * @param code
 * @throws {Error}
 */
export const ISO_3166ToCountryName = (
  code: string | ISO_3166_1 | ISO_3166_2 | null | undefined
): string =>
  assertExists(
    ISO_3166_1__MAP[assertIsISO_3166(code).slice(0, 2) as ISO_3166_1],
    `Invalid ISO code ${code}`
  );

/**
 * @param code
 * @throws {Error}
 */
export const ISO_3166_2ToRegionName = (
  code: string | ISO_3166_2 | null | undefined
): string => ISO_3166_2__MAP[assertIsISO_3166_2(code)];

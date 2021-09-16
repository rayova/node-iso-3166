import {
  assertExists,
  assertIsISO_3166,
  assertIsISO_3166_1,
  assertIsISO_3166_2,
} from './assertions';
import type { ISO_3116_1 } from '../ISO_3116_1';
import type { ISO_3116_2 } from '../ISO_3116_2';
import { ISO_3116_1__MAP } from '../ISO_3116_1';
import { ISO_3116_2__MAP } from '../ISO_3116_2';

export interface ParsedISO_3166_2 {
  countryCode: ISO_3116_1;
  country: string;
  regionCode: ISO_3116_2;
  region: string;
}

/**
 * @param code
 * @throws {Error}
 */
export const parseISO_3166_2 = (
  code: string | ISO_3116_2 | null | undefined
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
  code: string | ISO_3116_1 | ISO_3116_2 | null | undefined
): string =>
  assertExists(
    ISO_3116_1__MAP[assertIsISO_3166(code).slice(0, 2) as ISO_3116_1],
    `Invalid ISO code ${code}`
  );

/**
 * @param code
 * @throws {Error}
 */
export const ISO_3166_2ToRegionName = (
  code: string | ISO_3116_2 | null | undefined
): string => ISO_3116_2__MAP[assertIsISO_3166_2(code)];

/**
 * @param countryNameRequested
 * @param regionNameRequested
 * @throws {Error}
 */
export function countryNameAndRegionNameToIso3166_2(
  countryNameRequested?: string,
  regionNameRequested?: string
): ISO_3116_2 {
  const countryAsserted = assertExists(
    countryNameRequested,
    'countryNameRequested is undefined'
  );
  const regionAsserted = assertExists(
    regionNameRequested,
    'regionNameRequested is undefined'
  );

  const countrySlug = slugify(countryAsserted);
  const regionSlug = slugify(regionAsserted);

  if (countrySlug === 'canada' || countrySlug === 'united-states') {
    for (const [regionCode, regionName] of Object.entries(ISO_3116_2__MAP)) {
      if (slugify(regionName) === regionSlug) {
        return regionCode as ISO_3116_2;
      }
    }
  }

  throw new Error(
    `Could not find a ISO code for ${countryNameRequested}, ${regionNameRequested}`
  );
}

export function tryCountryNameAndRegionNameToIso3166_2(
  countryName?: string,
  regionName?: string
): ISO_3116_2 | undefined {
  try {
    return countryNameAndRegionNameToIso3166_2(countryName, regionName);
  } catch (e) {
    console.log({ countryName, regionName, e });

    return;
  }
}

const slugify = (part: string): string =>
  part
    .toLowerCase()
    .replace(/[.,#_| ]/g, '-') // replace with hyphens
    .replace(/[^a-z0-9-]/g, '') // remove non-alphanumeric/hyphens
    .replace(/-+/g, '-') // remove repeated hyphens
    .replace(/^-/, '') // remove hyphen at beginning of str
    .replace(/-$/, ''); // remove hyphen at end of str

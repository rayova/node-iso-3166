import {
  isISO_3166,
  isISO_3166_1,
  isISO_3166_2,
  isISO_3166_2_CA,
  isISO_3166_2_US,
} from './is-iso-3166';
import type { ISO_3116_1 } from '../ISO_3116_1';
import type { ISO_3116_2, ISO_3116_2_CA, ISO_3116_2_US } from '../ISO_3116_2';

/**
 * @param value
 * @param errorMessage
 * @throws {Error}
 */
export function assertExists<A>(
  value: A | null | undefined,
  errorMessage = "Value doesn't exist"
): A {
  if (value !== null && value !== undefined) return value;

  throw new Error(errorMessage);
}

/**
 * @param code
 * @throws {Error}
 */
export function assertIsISO_3166_1(
  code: string | ISO_3116_1 | null | undefined
): ISO_3116_1 {
  if (isISO_3166_1(code)) return code;

  throw new Error(`Invalid ISO code ${String(code)}`);
}

/**
 * @param code
 * @throws {Error}
 */
export function assertIsISO_3166_2(
  code: string | ISO_3116_2 | null | undefined
): ISO_3116_2 {
  if (isISO_3166_2(code)) return code;

  throw new Error(`Invalid ISO code ${String(code)}`);
}

/**
 * @param code
 * @throws {Error}
 */
export function assertIsISO_3166_2_CA(
  code: string | ISO_3116_2_CA | null | undefined
): ISO_3116_2_CA {
  if (isISO_3166_2_CA(code)) return code;

  throw new Error(`Invalid ISO code ${String(code)}`);
}

/**
 * @param code
 * @throws {Error}
 */
export function assertIsISO_3166_2_US(
  code: string | ISO_3116_2_US | null | undefined
): ISO_3116_2_US {
  if (isISO_3166_2_US(code)) return code;

  throw new Error(`Invalid ISO code ${String(code)}`);
}

/**
 * @param code
 * @throws {Error}
 */
export function assertIsISO_3166(
  code: string | ISO_3116_1 | ISO_3116_2 | null | undefined
): ISO_3116_1 | ISO_3116_2 {
  if (isISO_3166(code)) return code;

  throw new Error(`Invalid ISO code ${String(code)}`);
}

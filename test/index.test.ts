import {
  assertIsISO_3166,
  assertIsISO_3166_1,
  assertIsISO_3166_2,
  assertIsISO_3166_2_CA,
  assertIsISO_3166_2_US,
  isISO_3166,
  isISO_3166_1,
  isISO_3166_2,
  isISO_3166_2_CA,
  isISO_3166_2_US,
  ISO_3166_1__MAP,
  ISO_3166_2__MAP,
  ISO_3166_2_CA__MAP,
  ISO_3166_2_US__MAP,
} from '../src';

describe('isISO_3166', () => {
  it('works with known iso codes', () => {
    for (const code of Object.keys(ISO_3166_1__MAP)) {
      expect(isISO_3166(code)).toBeTruthy();
      expect(isISO_3166_1(code)).toBeTruthy();
      expect(assertIsISO_3166(code)).toBeTruthy();
      expect(assertIsISO_3166_1(code)).toBeTruthy();
    }

    for (const code of Object.keys(ISO_3166_2__MAP)) {
      expect(isISO_3166(code)).toBeTruthy();
      expect(isISO_3166_2(code)).toBeTruthy();
      expect(assertIsISO_3166(code)).toBeTruthy();
      expect(assertIsISO_3166_2(code)).toBeTruthy();
    }

    for (const code of Object.keys(ISO_3166_2_CA__MAP)) {
      expect(isISO_3166(code)).toBeTruthy();
      expect(isISO_3166_2(code)).toBeTruthy();
      expect(isISO_3166_2_CA(code)).toBeTruthy();
      expect(assertIsISO_3166(code)).toBeTruthy();
      expect(assertIsISO_3166_2(code)).toBeTruthy();
      expect(assertIsISO_3166_2_CA(code)).toBeTruthy();
    }

    for (const code of Object.keys(ISO_3166_2_US__MAP)) {
      expect(isISO_3166(code)).toBeTruthy();
      expect(isISO_3166_2(code)).toBeTruthy();
      expect(isISO_3166_2_US(code)).toBeTruthy();
      expect(assertIsISO_3166(code)).toBeTruthy();
      expect(assertIsISO_3166_2(code)).toBeTruthy();
      expect(assertIsISO_3166_2_US(code)).toBeTruthy();
    }
  });
});

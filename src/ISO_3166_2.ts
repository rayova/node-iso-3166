export type ISO_3166_2 = ISO_3166_2_CA | ISO_3166_2_US;

export type ISO_3166_2_CA = `CA-${ISO_3166_2_CA__sub}`;
export type ISO_3166_2_CA__sub = keyof typeof ISO_3166_2_CA__sub__MAP;

export type ISO_3166_2_US = `US-${ISO_3166_2_US__sub}`;
export type ISO_3166_2_US__sub = keyof typeof ISO_3166_2_US__sub__MAP;

// https://en.wikipedia.org/wiki/ISO_3166-2:CA
export const ISO_3166_2_CA__sub__MAP = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Québec',
  SK: 'Saskatchewan',
  YT: 'Yukon Territories',
};

// https://en.wikipedia.org/wiki/ISO_3166-2:US
export const ISO_3166_2_US__sub__MAP = {
  // states
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',

  // non-states
  AS: 'American Samoa',
  DC: 'District of Columbia',
  GU: 'Guam',
  MP: 'Northern Mariana Islands',
  PR: 'Puerto Rico',
  UM: 'U.S. Virgin Islands',
  VI: 'U.S. Minor Outlying Islands',
};

export const ISO_3166_2_CA__MAP = Object.fromEntries(
  Object.entries(ISO_3166_2_CA__sub__MAP).map(([sub, long]) => [
    `CA-${sub}`,
    long,
  ])
) as Record<ISO_3166_2_CA, string>;

export const ISO_3166_2_US__MAP = Object.fromEntries(
  Object.entries(ISO_3166_2_US__sub__MAP).map(([sub, long]) => [
    `US-${sub}`,
    long,
  ])
) as Record<ISO_3166_2_US, string>;

export const ISO_3166_2__MAP: Record<ISO_3166_2, string> = {
  ...ISO_3166_2_CA__MAP,
  ...ISO_3166_2_US__MAP,
};

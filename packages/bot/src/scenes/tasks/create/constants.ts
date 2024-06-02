// = /^(👨|👩)\s[A-Za-zА-Яа-я]{4,7}$/gm;
export const GENDERS = { MALE: 'male', FEMALE: 'female' };

// name
// type
// country
// placement
// description
// url
// available_limit
// increase_mining_rate?
// check_key?
// contact?xf

export enum QUESTION_KEYS {
  TYPE = 'type',
  COUNTRY = 'country',
  PLACEMENT = 'placement',
  INCREASE_MINING_RATE = 'increase_mining_rate',

  AVAILABLE_LIMIT = 'available_limit',
  NAME = 'name',
  DESCRIPTION = 'description',
  CHECK_KEY = 'check_key',
  CONTACT = 'contact',
  URL = 'url',
}

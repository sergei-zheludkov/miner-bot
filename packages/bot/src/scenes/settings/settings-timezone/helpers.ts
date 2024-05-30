import { ARRAY } from '@common_bot/shared';

const { getLastIndex, getLastElement } = ARRAY;
const BUTTONS_IN_LINE = 4;

type Buttons = Array<Array<JSX.Element>>;

const getTimezoneButtonLines = (acc: Buttons, button: JSX.Element) => {
  const lastIndex = getLastIndex(acc);

  if (acc[lastIndex].length === BUTTONS_IN_LINE) {
    return [...acc, [button]];
  }

  const slicedAcc = acc.slice(0, lastIndex);
  const lastItem = getLastElement(acc);

  return lastItem ? [...slicedAcc, [...lastItem, button]] : acc;
};

export { getTimezoneButtonLines };

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-self-compare
const isNaN = (value: any): value is number => value !== value;

export { isNaN };

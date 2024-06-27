import { SCENE } from './constants';

export const isToday = (scene: SCENE) => scene === SCENE.TODAY;
export const isMonth = (scene: SCENE) => scene === SCENE.MONTH;
export const isAllTime = (scene: SCENE) => scene === SCENE.ALL_TIME;

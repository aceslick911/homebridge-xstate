import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { XStatePlatform } from './platformXState';

import * as settings from './settings';
/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, XStatePlatform);
};

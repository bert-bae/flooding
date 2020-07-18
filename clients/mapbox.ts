import axios from 'axios';
import { get } from 'lodash';

import { replaceString } from '../utils/string-replace';
import { ICoordinates } from '../types/mapbox-types';
import { Console } from 'console';

const endpoints = {
  getTerrain: '/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw@2x',
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPBOX_API_URL,
  timeout: 1000,
  headers: {},
});

const appendAccessToken = (url) => {
  let result = url;
  if (url.charAt(url.length - 1) !== '/') {
    result += '/';
  }
  return `${result}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
};

const getTerrainData = async (coordinate: ICoordinates): Promise<unknown> => {
  let endpoint = appendAccessToken(endpoints.getTerrain);

  for (const key in coordinate) {
    const regex = new RegExp(`\{${key}\}`, 'gi');
    endpoint = replaceString(endpoint, coordinate[key], regex);
  }

  try {
    return get(await client.get(endpoint), 'data');
  } catch (err) {
    console.log(err);
  }
};

export default {
  getTerrainData,
};

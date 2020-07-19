//@ts-ignore

import axios from 'axios';
import { get } from 'lodash';
import { replaceString } from '../utils/string-replace';
import { ICoordinates } from '../types/mapbox-types';

import * as config from '../config/env-config.json';

const endpoints = {
  getTerrain: '/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw@2x',
  getTileQueryElevation:
    'mapbox.mapbox-terrain-v2/tilequery/{longitude},{latitude}.json?layers=contour&limit=50',
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPBOX_API_URL,
  timeout: 1000,
  headers: {},
});

const appendAccessToken = (url: string) => {
  let result = url;
  if (url.match('\\?').length > 0) {
    result += '&';
  } else {
    if (url.charAt(url.length - 1) !== '/') {
      result += '/';
    }
    result += '?';
  }

  return `${result}access_token=${config.MAPBOX_API_URL}`;
};

const getTileQueryElevation = async (longitude: number, latitude: number) => {
  let endpoint = appendAccessToken(endpoints.getTileQueryElevation);

  endpoint = replaceString(endpoint, String(longitude), /{longitude}/);
  endpoint = replaceString(endpoint, String(latitude), /{latitude}/);

  try {
    const data = get(await client.get(endpoint), 'data');
    const elevations = [];

    data.features.forEach((set: { properties: { ele: number } }) => {
      elevations.push(set.properties.ele);
    });

    return Math.max(...elevations);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getTileQueryElevation,
};

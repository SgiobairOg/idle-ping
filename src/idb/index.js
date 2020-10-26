import { Store, clear, get, set } from "idb-keyval"

import { config } from './../configuration';
import kebabCase from 'lodash.kebabcase';

const idb = new Store(kebabCase(config.gameInfo.title), 'clicker-store')

export const idbSet = (key, value) => set(key, value, idb);
export const idbGet = (key) => get(key, idb);
export const idbClear = () => clear(idb);

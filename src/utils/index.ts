/* eslint-disable @typescript-eslint/no-explicit-any */
const UNKNOWN = '?';

export const hasStr = (str1: string, str2: string) => {
  if (typeof str1 !== 'string') return false;
  return String(str2).toLowerCase().indexOf(str1.toLowerCase()) !== -1;
};

export const getLower = (str: string) => str.toLowerCase();

export const getMajor = (version: unknown): string => {
  if (typeof version !== 'string') return '';

  return (
    version
      .replace(/[^\d\.]/g, '')
      .split('.')
      .shift() || ''
  );
};

export const trimStr = (str: string) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

export const getStr = (str: string, maps: unknown[] | Record<string, unknown>) => {
  // tslint:disable-next-line: forin
  for (const i in maps) {
    const map = maps[i];
    if (Array.isArray(map) && map.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < map.length; j += 1) {
        if (hasStr(map[j], str)) {
          return i === UNKNOWN ? void 0 : i;
        }
      }
    } else if (hasStr(map, str)) {
      return i === UNKNOWN ? void 0 : i;
    }
  }
  return str;
};

export const execRxp = <T = unknown[] | Record<string, unknown>>(ua: string, arrays: unknown[], target = {}): T => {
  if (!ua) return target as T;

  let i = 0;
  let matches: any;

  // loop through all regexes maps
  while (i < arrays.length && !matches) {
    const regex = arrays[i] as any; // even sequence (0,2,4,..)
    const props = arrays[i + 1]; // odd sequence (1,3,5,..)
    let k = 0;
    let j = k;

    // try matching uastring with regexes
    while (j < regex.length && !matches) {
      matches = regex[j].exec(ua);
      j += 1;
      if (!matches) continue;

      (props as any[]).forEach((prop) => {
        k += 1;

        const match = matches[k];
        if (!(prop instanceof Array) || prop.length < 1) {
          target[prop] = match || void 0;
          return target;
        }

        if (prop.length < 2) return target;

        const key = prop[0] as string;
        const val = prop[1];
        const isFunc = typeof val === 'function';

        switch (prop.length) {
          case 2:
            target[key] = isFunc ? val.call(target, match) : val;
            return target;
          case 3:
            if (!match) {
              target[key] = void 0;
            } else if (isFunc && !(val.exec && val.test)) {
              target[key] = val.call(target, match, prop[2]);
            } else {
              target[key] = match.replace(val, prop[2]);
            }
            return target;
          case 4:
            target[key] = match ? prop[3].call(target, match.replace(val, prop[2])) : void 0;
            return target;
        }
      });
    }
    i += 2;
  }

  return target as T;
};

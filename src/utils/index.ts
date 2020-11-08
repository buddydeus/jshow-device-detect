const FUN_TYPE = 'function';
const STR_TYPE = 'string';
const UNKNOWN = '?';

export const hasStr = (str1: any, str2: string) => {
  if (typeof str1 !== STR_TYPE) return false;
  return String(str2).toLowerCase().indexOf(str1.toLowerCase()) !== -1;
};

export const getLower = (str: string) => str.toLowerCase();

export const getMajor = (version: any) => {
  if (typeof version !== STR_TYPE) return;
  return version
    .replace(/[^\d\.]/g, '')
    .split('.')
    .shift();
};

export const trimStr = (str: string) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

export const getStr = (str: string, maps: any) => {
  // tslint:disable-next-line: forin
  for (const i in maps) {
    const map = maps[i];
    if (map instanceof Array && map.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < map.length; j += 1) {
        if (hasStr(map[j], str)) {
          return i === UNKNOWN ? undefined : i;
        }
      }
    } else if (hasStr(map, str)) {
      return i === UNKNOWN ? undefined : i;
    }
  }
  return str;
};

export const execRxp = (target: any, ua: string, arrays: any[]) => {
  if (!ua) return;

  let i = 0;
  let matches: any;

  // loop through all regexes maps
  while (i < arrays.length && !matches) {
    const regex = arrays[i]; // even sequence (0,2,4,..)
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
          target[prop] = match || undefined;
          return;
        }

        if (prop.length < 2) return;

        const key = prop[0] as string;
        const val = prop[1];
        const isFunc = typeof val === FUN_TYPE;

        switch (prop.length) {
          case 2:
            target[key] = isFunc ? val.call(target, match) : val;
            return;
          case 3:
            if (!match) {
              target[key] = undefined;
            } else if (isFunc && !(val.exec && val.test)) {
              target[key] = val.call(target, match, prop[2]);
            } else {
              target[key] = match.replace(val, prop[2]);
            }
            return;
          case 4:
            target[key] = match ? prop[3].call(target, match.replace(val, prop[2])) : undefined;
            return;
        }
      });
    }
    i += 2;
  }
};

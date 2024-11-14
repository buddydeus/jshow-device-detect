import { ParserField } from '../constants/enums/parser';

type ParserValue = string | RegExp;
type ParserFieldConfig = ParserField | [ParserField, ParserValue, string?];
type ParserRule = [RegExp, ParserFieldConfig[]];

export class RegexParser {
  static parse(ua: string, rules: ParserRule[]): Record<ParserField, string> {
    const result: Partial<Record<ParserField, string>> = {};

    if (!Array.isArray(rules)) {
      return this.createProxy({});
    }

    for (const [pattern, fields] of rules) {
      const match = ua.match(pattern);
      if (!match) continue;

      let matchIndex = 1;
      for (const field of fields) {
        if (Array.isArray(field)) {
          const [fieldName, value, replacement] = field;
          if (typeof value === 'string') {
            result[fieldName] = value;
          } else if (value instanceof RegExp && replacement) {
            const matchValue = match[matchIndex];
            result[fieldName] = matchValue
              ? matchValue.replace(value, replacement)
              : '';
            matchIndex++;
          } else {
            result[fieldName] = match[matchIndex++] || '';
          }
        } else {
          result[field] = match[matchIndex++] || '';
        }
      }

      if (Object.keys(result).length > 0) break;
    }

    return this.createProxy(result);
  }

  private static createProxy(target: Partial<Record<ParserField, string>>) {
    return new Proxy(target as Record<ParserField, string>, {
      get: (obj, prop: string) => obj[prop as ParserField] || '',
    });
  }
}

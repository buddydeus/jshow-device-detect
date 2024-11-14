import { DeviceType } from '@/constants';

export interface DevicePattern {
  pattern: RegExp;
  device: {
    type?: DeviceType;
    vendor?: string;
    model?: string | ((matches: RegExpMatchArray) => string);
  };
}

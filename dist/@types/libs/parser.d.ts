declare class UAParser {
  get userAgent(): string;
  set userAgent(value: string);
  get browser(): any;
  get engine(): any;
  get os(): any;
  get device(): any;
  get cpu(): any;
  private _userAgent;
  private _targetObject;
  constructor(ua?: string);
  reset: (ua?: string | undefined) => this;
  getBrowser: (
    ua?: string,
  ) => {
    name: undefined;
    version: undefined;
    major: undefined;
  };
  getCPU: (
    ua?: string,
  ) => {
    architecture: undefined;
  };
  getDevice: (
    ua?: string,
  ) => {
    vendor: undefined;
    model: undefined;
    type: undefined;
  };
  getEngine: (
    ua?: string,
  ) => {
    name: undefined;
    version: undefined;
  };
  getOS: (
    ua?: string,
  ) => {
    name: undefined;
    version: undefined;
  };
  toString(): any;
}
export default UAParser;

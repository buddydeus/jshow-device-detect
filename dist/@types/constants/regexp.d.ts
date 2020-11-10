declare const REGEXPS: {
  browser: (
    | RegExp[]
    | (string | (string | RegExp)[])[]
    | (
        | string
        | (
            | string
            | {
                '1.0': string;
                '1.2': string;
                '1.3': string;
                '2.0': string;
                '2.0.2': string;
                '2.0.3': string;
                '2.0.4': string;
                '?': string;
              }
            | ((str: string, maps: any) => string | undefined)
          )[]
      )[]
  )[];
  cpu: (RegExp[] | (string | RegExp | ((str: string) => string))[][])[];
  device: (
    | RegExp[]
    | (string | (string | RegExp)[])[]
    | (
        | string
        | {
            'Fire Phone': string[];
          }
        | ((str: string, maps: any) => string | undefined)
      )[][]
    | (
        | (
            | string
            | {
                HTC: string;
                Sprint: string;
              }
            | ((str: string, maps: any) => string | undefined)
          )[]
        | (
            | string
            | {
                'Evo Shift 4G': string;
              }
            | ((str: string, maps: any) => string | undefined)
          )[]
      )[]
    | (string | (string | ((str: string) => string))[])[]
  )[];
  engine: (RegExp[] | (string | string[])[])[];
  os: (
    | RegExp[]
    | (string | RegExp)[][]
    | (
        | string
        | (
            | string
            | {
                ME: string;
                'NT 3.11': string;
                'NT 4.0': string;
                '2000': string;
                XP: string[];
                Vista: string;
                '7': string;
                '8': string;
                '8.1': string;
                '10': string[];
                RT: string;
              }
            | ((str: string, maps: any) => string | undefined)
          )[]
      )[]
  )[];
};
export default REGEXPS;

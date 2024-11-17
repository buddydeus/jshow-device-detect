import {
  CPUArchitecture,
  OSType,
  UserAgentOSSection,
  UserAgentSectionType,
  UserAgentTraits,
  UserAgentVersion
} from './types';

const USER_AGENT_SECTION_REGEX =
  /([^\s,;()]+\/\d+(?:\.\d+)*)|(\([\w\d ;,-]+\))/g;

const USER_AGENT_SECTION_SPLIT = /,|;/g;

const isTrait = (value: string): boolean =>
  value.startsWith('(') && value.endsWith(')');

const splitTrait = (value: string): string[] =>
  value.split(USER_AGENT_SECTION_SPLIT).map(o => {
    const v = o.trim();
    if (!v.startsWith('like ')) return v;

    return v.slice(5);
  });

const initVersion = (): UserAgentVersion => ({
  major: 0,
  minor: 0,
  patch: 0
});

export class UserAgentDetect {
  private _userAgent: string;

  constructor(userAgent: string) {
    this._userAgent = userAgent;
    this.parseUserAgent(this._userAgent);
  }

  //#region parse userAgent

  private parseUserAgent(userAgent: string): void {
    const sections = userAgent.match(USER_AGENT_SECTION_REGEX);
    if (!sections) return;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];

      if (i === 1) {
        this.parseOS(section.slice(1, -1));
        continue;
      }

      if (isTrait(section)) {
        this.parseTrait(section.slice(1, -1));
        continue;
      }
    }
  }

  private splitTraites(value: string) {}

  private parseOS(value: string) {
    const version = initVersion();
    const section: UserAgentOSSection = {
      type: UserAgentSectionType.OS,
      value,
      os: OSType.Unknown,
      cpu: CPUArchitecture.Unknown,
      version
    };

    return section;
  }

  private parseTrait(value: string) {
    const section: UserAgentTraits = {
      type: UserAgentSectionType.Traits,
      value,
      traits: splitTrait(value)
    };

    return section;
  }

  //#endregion

  public get userAgent(): string {
    return this._userAgent;
  }
}

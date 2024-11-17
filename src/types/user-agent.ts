import { CPUArchitecture, OSType } from './global';

export interface UserAgentVersion {
  major: number;
  minor: number;
  patch: number;
}

export enum UserAgentSectionType {
  Version = 'version',
  OS = 'os',
  Traits = 'trait'
}

export interface UserAgentSection<T extends UserAgentSectionType> {
  type: T;
  value: string;
}

export interface UserAgentVersionSection
  extends UserAgentSection<UserAgentSectionType.Version> {
  key: string;
  version: UserAgentVersion;
}

export interface UserAgentOSSection
  extends UserAgentSection<UserAgentSectionType.OS> {
  os: OSType;
  cpu: CPUArchitecture;
  version: UserAgentVersion;
}

export interface UserAgentTraits
  extends UserAgentSection<UserAgentSectionType.Traits> {
  traits: string[];
}

export type ImageData = {
  alt: string;
  src: string;
  w: number;
  h: number;
  verify?: string;
  issued?: string;
}

export type Role = {
  title: string;
  timeline: string;
  description: string[];
}

export type Entity = {
  imageData: ImageData;
  roles: Role[];
  subTitle?: string;
  location?: string;
}

export type Skill = {
  title: string;
  collection: ImageData[];
}

export type Project = {
  title: string;
  subTitle: string;
  location: string;
  timeline: string;
  description: string[];
}

export type Signature = {
  userID: string;
  username: string;
  platform: string;
  message: string;
  date: string;
}

export type ImageData = {
  alt: string;
  src: string;
  w: number;
  h: number;
  verify?: string;
  msg?: string;
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
  more?: Boolean;
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

export interface LinkCardProps {
  title: string;
}

export interface FormProps {
  title: string;
}
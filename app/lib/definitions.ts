
export type ImageData = {
  alt: string;
  src: string;
  w: number;
  h: number;
}

export type Role = {
  title: string;
  timeline: string;
  description: string[];
  verify: boolean;
}

export type Company = {
  imageData: ImageData;
  location: string;
  roles: Role[];
}
export type Activity = {
  imageData: ImageData;
  subTitle: string;
  roles: Role[];
}


export type Certificate = {
  title: string;
  collection: ImageData[];
}
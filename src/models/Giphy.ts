export interface Giphy {
  data: Data[];
}

export interface Data {
  id: string;
  title: string;
  url: string;
  image: Images;
}

export interface Images {
  original: OriginalImage;
}

export interface OriginalImage {
  url: string;
}

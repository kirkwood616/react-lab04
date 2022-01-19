export interface Giphy {
  data: Data[];
}

export interface Data {
  id: string;
  title: string;
  images: Images;
}

export interface Images {
  fixed_height: FixedHeightImage;
}

export interface FixedHeightImage {
  url: string;
}

declare module "*.png" {
  const src: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default src;
}

declare module "*.jpg" {
  const src: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default src;
}

declare module "*.jpeg" {
  const src: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default src;
}

declare module "*.webp" {
  const src: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default src;
}

declare module "*.avif" {
  const src: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

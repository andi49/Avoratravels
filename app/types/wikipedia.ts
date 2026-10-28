export type Wikipedia = {
  title: string;
  extract: string;
  description?: string;

  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };

  content_urls?: {
    desktop?: {
      page: string;
    };
  };
};
export interface CrawlerDataInterface {
  id: string;
  status: string;
  depthLimit: number;
  linksLimit: number;
  url: string;
  data: ReadonlyArray<string>;
}

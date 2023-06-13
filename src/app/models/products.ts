
export interface IProducts{
  id: number,
  title: string,
  price: number,
  year: number,
  image?: string,
  configure: IProductsConfig;
}

export interface IProductsConfig{
  chop: string,
  ssd: string,
  memory: string,
  display: string;
}

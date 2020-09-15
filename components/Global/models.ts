export interface IMenuItem {
  title: string;
  path?: string;
  items?: IMenuItem[];
}
export interface IParentProps {
  title: string;
  items: IMenuItem[];
}
export interface IMenuProps {
  to: string;
}
export interface ISocial {
  icon: string;
  href: string;
}

export interface INews {
  imageSrc: string;
  month: string;
  day: string;
  author: string;
  comments: number;
  title: string;
  content: string;
}
export interface ICategoryListItem {
  name: string;
  count: number;
}

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

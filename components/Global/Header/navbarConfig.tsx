import { IMenuItem } from "../models";
import MenuItem from "./MenuItem";
import ParentMenuItem from "./ParentMenuItem";

export const navbarItems: IMenuItem[] = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "خدمات",
    items: [
      {
        title: "حوزه شبکه",
        path: "/",
      },
      {
        title: "دیگر خدمات",
        path: "/",
      },
    ],
  },
  {
    title: "وبلاگ و اخبار",
    path: "/",
  },
  {
    title: "درباره ما",
    items: [
      {
        title: "معرفی شرکت",
        path: "/",
      },
      {
        title: "مشتریان ما",
        path: "/",
      },
    ],
  },
  {
    title: "تماس با ما",
    path: "/",
  },
];

export const renderNav = (items: IMenuItem[]) => {
  return items.map((item, i) => {
    if (item.items)
      return <ParentMenuItem items={item.items} title={item.title} key={i} />;
    return (
      <MenuItem to={item.path} key={i}>
        {item.title}
      </MenuItem>
    );
  });
};

import { IMenuItem } from "../models";
import MenuItem from "./MenuItem";
import ParentMenuItem from "./ParentMenuItem";

export const navbarItems: IMenuItem[] = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "پروژه‌ها",
    path: "/projects",
  },
  {
    title: "اخبار",
    path: "/news",
  },
  {
    title: "درباره ما",
    items: [
      {
        title: "معرفی شرکت",
        path: "/about",
      },
      {
        title: "مشتریان ما",
        path: "/customers",
      },
    ],
  },
  {
    title: "تماس با ما",
    path: "/contact-us",
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

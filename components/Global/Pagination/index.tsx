import React from "react";
import UL from "../UL";
import Item from "./Item";

interface PaginationProps {
  current: number;
  total: number;
  perPage: number;
  onChange: (n: number) => void;
}
const index: React.FC<PaginationProps> = ({
  current,
  total,
  perPage,
  onChange,
}) => {
  const pagesCount = total / perPage ? total / perPage : 1;
  return (
    <nav>
      <UL className="pagination justify-content-center">
        <Item>
          <span aria-hidden="true">«</span>
          <span className="sr-only">قبل</span>
        </Item>
        {Array(pagesCount)
          .fill("")
          .map((_, i) => (
            <Item>{i+1}</Item>
          ))}
        <Item>
          <span aria-hidden="true">»</span>
          <span className="sr-only">بعد</span>
        </Item>
      </UL>
    </nav>
  );
};

export default index;

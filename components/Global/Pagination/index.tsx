import React, { useEffect, useMemo, useState } from "react";
import {
  Pagination as BootPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

interface PaginationProps {
  defaultValue: number;
  total: number;
  perPage: number;
  onChange: (n: number) => void;
}
const Index: React.FC<PaginationProps> = ({
  total,
  defaultValue,
  perPage,
  onChange,
}) => {
  const [current, setCurrent] = useState(defaultValue);

  const pagesCount = useMemo(() => (total / perPage ? total / perPage : 1), []);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const textContent = e.currentTarget.textContent;
    if (textContent.includes("Previous")) {
      if (current > 1) {
        setCurrent((pre) => pre - 1);
      }
    } else if (textContent.includes("Next")) {
      if (current < pagesCount) {
        setCurrent((pre) => pre + 1);
      }
    } else {
      setCurrent(Number(textContent));
    }
  };
  useEffect(() => {
    onChange(current);
  }, [current , onChange]);
  return (
    <BootPagination size="md" listClassName="justify-content-center">
      <PaginationItem>
        <PaginationLink first onClick={handleClick} />
      </PaginationItem>
      <PaginationItem disabled={current === 1}>
        <PaginationLink previous onClick={handleClick} />
      </PaginationItem>
      {Array(pagesCount)
        .fill("")
        .map((_, i) => {
          return (
            <PaginationItem active={current === i + 1} key={i}>
              <PaginationLink onClick={handleClick}>{i + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
      <PaginationItem disabled={current === pagesCount}>
        <PaginationLink next onClick={handleClick} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={handleClick} />
      </PaginationItem>
    </BootPagination>
  );
};

{
}
export default Index;

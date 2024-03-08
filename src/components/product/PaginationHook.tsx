import { Button, Pagination } from "@nextui-org/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import { setPagination } from "../../store/slice/products";

const PaginationHook = () => {
  const currentPage = useAppSelector(
    (state) => state.products.pagination.currentPage
  );
  const totalPages = useAppSelector(
    (state) => state.products.pagination.totalPages
  );

  const dispatch = useAppDispatch();

  const setCurrentPage = (value: number) => {
    dispatch(setPagination(value));
  };

  return (
    <div className="w-full">
      <Pagination
        total={totalPages}
        color="primary"
        page={currentPage}
        onChange={setCurrentPage}
        showControls
        showShadow={true}
        classNames={{
          wrapper: "mx-auto my-10",
        }}
      />
    </div>
  );
};

export default PaginationHook;

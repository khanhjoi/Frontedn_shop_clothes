import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import { useDebounce } from "use-debounce";
import { useAppDispatch } from "../../../hooks/useSeleceter";
import { setSearch } from "../../../store/slice/products";

const SearchHook = () => {
  const [value, setValue] = React.useState("");
  const [debouncedValue] = useDebounce(value, 500); // Debounce value for 500 milliseconds
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setSearch(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="w-full flex flex-col gap-2 max-w-[240px]">
      <Input
        label="Sản phẩm"
        placeholder="Nhập tên sản phẩm"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-default-500 text-small">
        Sản phẩm đang tìm: {debouncedValue}
      </p>
    </div>
  );
};

export default SearchHook;

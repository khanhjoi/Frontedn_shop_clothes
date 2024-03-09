import { Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../../apis/Category";
import { Category } from "../../../types/TCategory";
import { useAppDispatch, useAppSelector } from "../../../hooks/useSeleceter";
import { setCategory } from "../../../store/slice/products";

const CategoryFilter = () => {
  const [value, setValue] = React.useState(new Set([]));
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCategories()
      .then((data: any) => {
        const newData = [
          {
            id: "all",
            name: "Tất cả sản phẩm",
            description: "",
          },
          ...data,
        ];
        setCategories(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandleSelect = (valueSelect: any) => {
    setValue(valueSelect);
    dispatch(setCategory(valueSelect?.currentKey));
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Sản phẩm"
        variant="bordered"
        placeholder="Chọn loại sản phẩm"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e: any) => {
          HandleSelect(e);
        }}
      >
        {categories &&
          categories.map((category, index: number) => (
            <SelectItem key={category?.id} value={category?.name}>
              {category?.name}
            </SelectItem>
          ))}
      </Select>
    </div>
  );
};

export default CategoryFilter;

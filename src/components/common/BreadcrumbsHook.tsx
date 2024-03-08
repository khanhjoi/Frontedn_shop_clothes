import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Link } from "react-router-dom";

const BreadcrumbsHook = ({ list }: any) => {
  return (
    <Breadcrumbs>
      {list &&
        list.length > 0 &&
        list.map((item: any) => <BreadcrumbItem>
          <Link to={`/${item}`}>
            {item}
          </Link>
        </BreadcrumbItem>)}
    </Breadcrumbs>
  );
};

export default BreadcrumbsHook;

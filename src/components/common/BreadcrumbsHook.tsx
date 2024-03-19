import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  list: BreadcrumbType[];
  className?: string;
}

export interface BreadcrumbType {
  title: string;
  link: string;
}

const BreadcrumbsHook: React.FC<BreadcrumbProps> = ({
  list,
  className,
}: any) => {
  return (
    <Breadcrumbs className={`${className}`}>
      {list &&
        list.length > 0 &&
        list.map((item: BreadcrumbType, index: number) => (
          <BreadcrumbItem key={index} >
            {index < list.length - 1 ? (
              <Link to={`${item.link}`}>{item.title}</Link>
            ) : (
              <p>{item.title}</p>
            )}
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsHook;

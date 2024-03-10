import { Avatar, Button, Card, CardBody, Textarea } from "@nextui-org/react";
import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";

const ProductComment = () => {
  const [comment, setComment] = React.useState("");
  return (
    <div className="w-full mt-4 ">
      <div className="border-b-1 pb-4">
        <Textarea
          // variant="underlined"
          label="Đánh giá của bạn: "
          labelPlacement="outside"
          placeholder="Enter your description"
          value={comment}
          onValueChange={setComment}
        />
        <RatingHook className="mt-4" isRating={true} />
        <Button className="mt-4 text-end">Đánh giá</Button>
      </div>

      <Card>
        <CardBody className="max-h-[28rem]">
          <div className="py-4 ">
            <div className="flex gap-5 ">
              <Avatar
                isBordered
                radius="full"
                className="ml-2"
                size="sm"
                src="/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Zoey Lang
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @zoeylang
                </h5>
              </div>
            </div>
            <div className="text-[0.8rem] m-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quis illo iste praesentium, harum quas similique,
              quidem voluptatum, doloribus voluptatibus ipsam temporibus fuga
              cum modi eum at maxime vel. Dolor?
            </div>
          </div>
          <div className="py-4 ">
            <div className="flex gap-5 ">
              <Avatar
                isBordered
                radius="full"
                className="ml-2"
                size="sm"
                src="/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Zoey Lang
                </h4>
                <RatingHook ratingProps={"3"} className="mt-4" isRating={false} />
              </div>
            </div>
            <div className="text-[0.8rem] m-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quis illo iste praesentium, harum quas similique,
              quidem voluptatum, doloribus voluptatibus ipsam temporibus fuga
              cum modi eum at maxime vel. Dolor?
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductComment;

import { Avatar, Button, Card, CardBody, Textarea } from "@nextui-org/react";
import React from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Rating } from "../../types/TProductDetail";

interface ProductCommentProps {
  ratings: Rating[];
}

const ProductComment: React.FC<ProductCommentProps> = ({ ratings }) => {
  const [comment, setComment] = React.useState("");

  return (
    <div className="w-full mt-4 ">
      <div className="mb-4">
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
      {ratings && ratings.length > 0 && (
        <Card>
          <CardBody className="max-h-[28rem]">
            {ratings.map((rating: Rating) => (
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
                      {rating.User.firstName} {rating.User.firstName}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      {rating.User.email}
                      <RatingHook
                        ratingProps={rating.rating}
                        className="mt-2"
                        isRating={false}
                      />
                    </h5>
                  </div>
                </div>
                <div className="text-[0.8rem] m-4">{rating.comment}</div>
              </div>
            ))}
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ProductComment;

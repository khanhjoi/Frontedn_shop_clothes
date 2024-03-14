import { Avatar, Button, Card, CardBody, Textarea } from "@nextui-org/react";
import React, { useEffect } from "react";
import RatingHook from "../product/filterCpn/RatingHook";
import { Rating } from "../../types/TProductDetail";
import { useParams } from "react-router-dom";
import { commentProduct } from "../../apis/User.api";
import { openNotification } from "../../helpers/showNotification";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import { setNewChange } from "../../store/slice/product";
interface ProductCommentProps {
  ratings: Rating[];
}

const ProductComment: React.FC<ProductCommentProps> = ({ ratings }) => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const [ratingsState, setRatingsState] = React.useState<any>(ratings);
  const newChange = useAppSelector((state) => state.product.newChange)
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [enableBtn, setEnableBtn] = React.useState(true);

  useEffect(() => {
    if (rating && comment) {
      setEnableBtn(false);
    }
  }, [comment, rating]);

  useEffect(() => {
    setRatingsState(ratings)
  }, [ratings])

  const handleComment = async () => {
    try {
      const data = {
        rating: rating,
        comment: comment,
      };
      if (typeof id === "string") {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          const response = await commentProduct(parsedId, data);
          if(response) {
            openNotification({
              message: "Thành công",
              description: "Thêm bình luận thành công",
              type: 'success',
            })
            setComment('');
            setRating(0)
            setEnableBtn(true);
            dispatch(setNewChange(!newChange))
          }
        } else {
        }
      }
    } catch (error :any) {
      if(error.response.status === 401) {
        openNotification({
          message: error.response.status,
          description: "Vui lòng đăng nhập để bình luận",
          type: 'error',
        })
      }
    }
  };

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
        <RatingHook className="mt-4" isRating={true} setShowValue={setRating} />
        <Button
          isDisabled={enableBtn}
          onClick={handleComment}
          className="mt-4 text-end"
        >
          Đánh giá
        </Button>
      </div>
      {ratingsState && ratingsState.length > 0 && (
        <Card>
          <CardBody className="max-h-[28rem]">
            {ratingsState.map((rating: Rating, index:number) => (
              <div key={index} className="py-4 ">
                <div className="flex justify-between">
                  <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    className="ml-2"
                    size="sm"
                    src="/avatars/avatar-1.png"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {rating.User.firstName} {rating.User.lastName}
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
                  <div className="text-[0.8rem] text-slate-400">{moment(rating.dateAdd).format('HH:mm- DD-MM-YYYY ')}</div>
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

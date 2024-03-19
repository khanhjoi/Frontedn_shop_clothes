import React, { useState } from "react";
import {
  Checkbox,
  Descriptions,
  Form,
  FormProps,
  Input,
  Modal,
  message,
} from "antd";
import { Button } from "@nextui-org/react";
import { updateProfile } from "../../apis/User.api";
import { useAppDispatch, useAppSelector } from "../../hooks/useSeleceter";
import { setNewChange } from "../../store/slice/product";
import { openNotification } from "../../helpers/showNotification";

type EditUserProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

const EditUser: React.FC<any> = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const changeFlag = useAppSelector((state) => state.product.newChange);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await updateProfile(values);
      if (response) {
        dispatch(setNewChange(!changeFlag));
        form.resetFields();
        setIsModalOpen(false);
        openNotification({
          message: "Thành công",
          description: "Cập nhật thông tin thành công",
          type: "success",
        });
      }
    } catch (error) {
      if (
        error?.response?.data?.statusCode === 500 &&
        error.response?.data?.message === "email has already been taken"
      ) {
        openNotification({
          message: "Cảnh báo",
          description: "Email đã có người sử dụng!!",
          type: "warning",
        });
      }
      console.error(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const validatePhone = (_:any, value:any) => {
    const regex = /^(0|\+84)(\d{9,10})$/; // Vietnamese phone number regex
    if (!regex.test(value)) {
      return Promise.reject("Số điện thoại không hợp lệ!");
    }
    return Promise.resolve();
  };
  
  return (
    <>
      <Modal
        title="Chỉnh sửa thông tin người dùng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={""}
      >
        <Form
          form={form}
          name="EditUser"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Tên"
            name="firstName"
            rules={[{ required: true, message: "Vui Lòng Nhập Tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Họ"
            name="lastName"
            rules={[{ required: true, message: "Vui Lòng nhập họ!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="SĐT"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                validator: validatePhone,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="email"
            name="email"
            rules={[{ required: true, message: "Vui Lòng nhập họ!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="submit" color="primary">
              {" "}
              Chỉnh sửa thông tin
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditUser;

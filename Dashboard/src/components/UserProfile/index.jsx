import React from "react";
import { UserProfileBlock, Form, Title, FormItem, Label, Input, Button } from "./style";
import ProfileUser from "../../store/ProfileUser";
import UserAPI from "../../store/UserAPI";

export const UserProfile = ({ setShowUserProfile }) => {
  const { email, nickName, title, userPhoto } = UserAPI.currentUser;
  const readerPhoto = async (files) => {
    const image = new Promise((resolve) => {
      let reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(files);
    });
    return await image;
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const userData = {
      nickName: e.target.nickname.value ? e.target.nickname.value : nickName,
      title: e.target.title.value ? e.target.title.value : title,
      userPhoto: e.target.avatar.files[0] ? await readerPhoto(e.target.avatar.files[0]) : userPhoto,
      email: e.target.email.value ? e.target.email.value : email,
    };
    if (e.target.passwordOne.value === e.target.passwordTwo.value) {
      const formReset = e.target.closest(".userForm");
      ProfileUser.updateUserData(userData);
      formReset.reset();
      setShowUserProfile(false);
    } else {
      alert("Ваши пароли разные!Введите корректные данные");
    }
  };

  return (
    <UserProfileBlock>
      <Form
        onSubmit={(e) => {
          updateUser(e);
        }}
        className="userForm"
      >
        <Title>Your Profile</Title>
        <FormItem>
          <Label htmlFor="nickname">
            User Nickname
            <Input type="text" name="nickname" id="nickname" />
          </Label>
          <Label htmlFor="title">
            title
            <Input type="text" name="title" id="title" />
          </Label>
        </FormItem>
        <FormItem>
          <Label htmlFor="avatar">
            Photo
            <Input type="file" name="avatar" id="avatar" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="email" name="" id="email" />
          </Label>
        </FormItem>
        <Button type="submit">Сохранить данные</Button>
      </Form>
    </UserProfileBlock>
  );
};

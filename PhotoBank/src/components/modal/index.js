import React from "react";
import "./style.css";
import {
  ModalElement,
  ModalBGElement,
  BigImage,
  PostForm,
  InputText,
  ButtonForm,
  CloseModal,
  CommentsDate,
  CommentsText,
  CommentsInfo,
} from "./style";

function Modal({
  modal,
  activeModal,
  closeModal,
  userComments,
  postUserComments,
  setCommentsUser,
  setNameUser,
  commentsUser,
  nameUser,
}) {
  const comments = userComments.map((item, index) => {
    return (
      <CommentsInfo key={index}>
        <CommentsDate className="date-msg">
          {new Date(item.date).toISOString().substr(0, 10)}
        </CommentsDate>
        <CommentsText className="text-msg">{item.text}</CommentsText>
      </CommentsInfo>
    );
  });

  const noPhotoMsg = () => {
    return (
      <CommentsInfo>
        <CommentsDate>К сожалениею коментарией нет</CommentsDate>
      </CommentsInfo>
    );
  };

  return (
    <ModalElement className={`modal ${activeModal}`} active={activeModal}>
      <ModalBGElement className="modal-bg">
        <CloseModal className="close" onClick={closeModal}>
          X
        </CloseModal>
        <div className="one-row">
          <BigImage src={`${modal.url}`} alt="" />
          <PostForm className="form" name="postForm">
            <InputText
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={nameUser}
              onChange={(e) => {
                setNameUser(e.target.value);
              }}
            />
            <InputText
              type="text"
              name="coment"
              id=""
              placeholder="Ваш комментарий"
              value={commentsUser}
              onChange={(e) => {
                setCommentsUser(e.target.value);
              }}
            />
            <ButtonForm
              type="button"
              onClick={(e) => {
                postUserComments();
              }}
            >
              Отправить комментарий
            </ButtonForm>
          </PostForm>
        </div>
        <div className="two-row">{userComments.length > 0 ? comments : noPhotoMsg()}</div>
      </ModalBGElement>
    </ModalElement>
  );
}

export default Modal;

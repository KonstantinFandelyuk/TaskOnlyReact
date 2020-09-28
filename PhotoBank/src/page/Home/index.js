import React, { useEffect, useState } from "react";
import List from "../../components/List/index";
import { HeroTitle } from "./style";
import Footer from "../../components/footer/index";
import Modal from "../../components/modal/index";
import { getImageById, getPhotoApi } from "../../api/api";

function App() {
  const [dataPhotos, setDataPhotos] = useState([]);
  const [modal, setModal] = useState([]);
  const [activeModal, setModalActive] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [commentsUser, setCommentsUser] = useState("");
  //

  const getPhoto = async () => {
    const data = await getPhotoApi();
    if (data !== undefined) {
      setDataPhotos(data);
    } else {
      console.log("Мы не получили данных");
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const getModalPhoto = async (id) => {
    const data = await getImageById(id);
    if (data !== undefined) {
      setModal(data);
      setUserComments(data.comments);
    } else {
      console.log("Данных нет");
    }
  };

  const postComments = async (id, data) => {
    console.log("id", id);
    await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const postUserComments = (id) => {
    const data = { name: nameUser, comment: commentsUser };
    postComments(id, data);
    setNameUser("");
    setCommentsUser("");
  };

  const openModal = async (id) => {
    console.log("modal", modal);
    await getModalPhoto(id);
    setModalActive("active");
  };

  const closeModal = () => {
    setModalActive("");
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <header>
            <HeroTitle className="header-title">Photo APP</HeroTitle>
          </header>
          <List dataPhotos={dataPhotos} openModal={openModal} />
          <hr />
          <Footer />
        </div>
      </div>
      <Modal
        modal={modal}
        activeModal={activeModal}
        closeModal={closeModal}
        userComments={userComments}
        postUserComments={postUserComments}
        setCommentsUser={setCommentsUser}
        setNameUser={setNameUser}
        nameUser={nameUser}
        commentsUser={commentsUser}
      />
    </>
  );
}

export default App;

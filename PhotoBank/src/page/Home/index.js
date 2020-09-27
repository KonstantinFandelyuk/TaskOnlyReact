import React, { useEffect, useState } from "react";
import List from "../../components/List/index";
import { HeroTitle } from "./style";
import Footer from "../../components/footer/index";
import Modal from "../../components/modal/index";

const API = `https://boiling-refuge-66454.herokuapp.com/images`;
function App() {
  const [dataPhotos, setDataPhotos] = useState([]);
  const [modal, setModal] = useState([]);
  const [activeModal, setModalActive] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [nameUser, setNameUser] = useState("");
  const [commentsUser, setCommentsUser] = useState("");
  //
  const getPhoto = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    setDataPhotos(data);
  };

  const getModalPhoto = async (id) => {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
    const data = await response.json();
    setModal(data);
    setUserComments(data.comments);
  };

  const postComments = async (id, data) => {
    await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const postUserComments = (id = 237) => {
    dataPhotos.map((item) => {
      console.log("item :>> ", item);
    });
    const data = { name: nameUser, comment: commentsUser };
    postComments(id, data);
    setNameUser("");
    setCommentsUser("");
  };

  useEffect(() => {
    getPhoto(API);
  }, []);

  const openModal = async (id) => {
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

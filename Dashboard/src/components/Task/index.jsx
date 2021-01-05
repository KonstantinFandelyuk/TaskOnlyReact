import React, { useEffect, useState } from "react";
import TaskAPI from "../../store/Task";
import { observer } from "mobx-react-lite";
import {
  TaskBlock,
  HeroTitle,
  BoardList,
  BoardItem,
  BoardTitle,
  BoardAdd,
  TaskItem,
  TaskInput,
  TaskInputTitle,
  TaskInputClose,
} from "./style";
import { toJS } from "mobx";
import { updateTask } from "../../api/boardApi";

export const Task = observer(() => {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);

  const openModal = (item) => {
    setModal(true);
    setCurrentItem(item);
  };

  const addTaskHandler = () => {
    TaskAPI.addNewTask(currentItem);
    setModal(false);
  };

  useEffect(() => {
    TaskAPI.fetchBoard();
  }, []);

  const dragStartHandler = (e, board, card) => {
    setCurrentItem(card);
    setCurrentBoard(board);
    e.target.style.background = "transparent";
  };

  const dragEndHandler = (e) => {
    e.target.style.background = "transparent";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "grey";
  };

  const onDropHandler = (e, board, card) => {
    e.preventDefault();
    console.log("toJS(currentBoard) :>> ", toJS(currentBoard));
    console.log("toJS(currentItem) :>> ", toJS(currentItem));
    const currentIndex = currentBoard.taskBoard.indexOf(currentItem);

    console.log("toJS(currentIndex currentIndex currentIndex) :>> ", toJS(currentIndex));

    currentBoard.taskBoard.splice(currentIndex, 1);
    const dropIndex = board.taskBoard.indexOf(card);
    board.taskBoard.splice(dropIndex + 1, 0, currentItem);

    TaskAPI.taskList.map(async (b) => {
      let taskBoard = [];
      if (b.id === board.id) {
        // console.log("board :>> ", toJS(board.taskBoard));
        taskBoard = board.taskBoard;
        await updateTask(board.objectId, { taskBoard });
        return board;
      }
      if (b.id === currentBoard.id) {
        // console.log("currentBoard :>> ", toJS(currentBoard));
        return currentBoard;
      }
      console.log("b :>> ", toJS(b));
      return b;
    });

    e.target.style.background = "transparent";
  };

  return (
    <TaskBlock>
      <div className="container">
        <HeroTitle>Task</HeroTitle>
        <BoardList>
          {TaskAPI.taskList.map((item) => (
            <BoardItem key={item.objectId}>
              <BoardTitle>
                {item.titleBoard} <BoardAdd onClick={() => openModal(item)}>+</BoardAdd>
              </BoardTitle>
              {item.taskBoard.map((task) => (
                <TaskItem
                  key={task.id}
                  draggable={true}
                  onDragStart={(e) => dragStartHandler(e, item, task)}
                  onDragLeave={(e) => dragEndHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => onDropHandler(e, item, task)}
                >
                  {task.title}
                </TaskItem>
              ))}
            </BoardItem>
          ))}
        </BoardList>
        <TaskInput open={modal}>
          <TaskInputClose onClick={() => setModal(false)}>X</TaskInputClose>
          <TaskInputTitle>Введите название задачи</TaskInputTitle>
          <input
            type="text"
            value={TaskAPI.taskName}
            onChange={(e) => TaskAPI.enterTaskName(e.target.value)}
          />
          <button onClick={(e) => addTaskHandler()}>Добавить задачу</button>
        </TaskInput>
      </div>
    </TaskBlock>
  );
});

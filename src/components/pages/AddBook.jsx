import React, { useState, useReducer } from "react";
import sendToFirebase from "../../../sendToFirebase";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import SelectLevel from "../UI/SelectLevel";
import StringInput from "../UI/StringInput";
import UploadItem from "../UI/UploadItem";
import UploadModal from "../UI/UploadModal";

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };

    case "note":
      return { ...state, note: action.payload };

    case "code":
      return { ...state, code: action.payload };

    case "level":
      return { ...state, level: action.payload };

    default:
      break;
  }
};

const initialState = {
  code: "",
  level: "",
  title: "",
  note: {},
};

const AddBook = () => {
  const [sidebarControl, setSidebarControl] = useState(true);
  const [added, setAdded] = useState(false);
  const [visible, setVisible] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const uploaded = {
    code: state.code,
    level: state.level,
    title: state.title,
    note: state.note,
  };

  const onCloseSidebar = (sidebar) => {
    setSidebarControl(sidebar);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setAdded(true);
    setVisible(true);
    sendToFirebase(uploaded);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  const noteLinkHandler = (note) => {
    dispatch({ type: "note", payload: note });
  };

  const titleHandler = (title) => {
    dispatch({ type: "title", payload: title });
  };

  const levelHandler = (level) => {
    dispatch({ type: "level", payload: level });
  };

  const codeHandler = (code) => {
    dispatch({ type: "code", payload: code });
  };

  return (
    <div>
      <Navbar onClick={onCloseSidebar} />
      <div>
        <Sidebar onClick={sidebarControl} />
        <form
          className="p-4 rounded-lg border-2 m-2 max-w-3xl md:mx-auto"
          onSubmit={formHandler}
        >
          {visible ? (
            <UploadModal
              initial="Adding file"
              end="File has been added"
              loading={added}
            />
          ) : (
            ""
          )}
          <h1 className="font-semibold text-2xl md:text-4xl mb-4">
            Add a new note
          </h1>
          <section>
            <StringInput
              name="Title of course"
              title="title"
              onChange={titleHandler}
            />
            <div className="flex items-start justify-between gap-2">
              <StringInput
                name="Course Code"
                title="code"
                onChange={codeHandler}
              />
              <SelectLevel name="Level" title="level" onChange={levelHandler} />
            </div>
            <UploadItem
              name="Note"
              title="note"
              onChange={noteLinkHandler}
              code={state.code}
              item={state.title}
            />
          </section>
          <button
            type="submit"
            className="m-auto block bg-[#0E1C36] text-white font-semibold p-2 rounded-md"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

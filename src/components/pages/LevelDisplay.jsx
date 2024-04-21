import React, { useState, useEffect } from "react";
import fetchFromFirebase from "../../../fetchFromFirebase";
import { InfinitySpin } from "react-loader-spinner";
import NoteCard from "../UI/NoteCard";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const LevelDisplay = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarControl, setSidebarControl] = useState(true);

  const onCloseSidebar = (sidebar) => {
    setSidebarControl(sidebar);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const booksData = await fetchFromFirebase();
        setBooks(
          props.activeLevel
            ? booksData.filter((item) => item.level === props.activeLevel)
            : booksData
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return (
          <div className="p-4 font-bold text-red-600">
            {"Error fetching books: " + error}
          </div>
        );
      }
    };

    fetchBooks();
  }, [props.activeLevel]);

  return (
    <div className="w-full box-border">
      {loading ? (
        <div className="fixed bg-white top-0 w-full h-[100vh] z-30 flex items-center justify-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#0E1C36"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div>
          <Navbar onClick={onCloseSidebar} />
          <div>
            <Sidebar onClick={sidebarControl} />
            <div className="overflow-auto">
              {books.map((book) => (
                <NoteCard
                  key={book.id}
                  title={book.title}
                  code={book.code}
                  links={book.note}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelDisplay;

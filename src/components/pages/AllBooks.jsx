import React, { useState, useEffect } from "react";
import fetchDataFromFirebase from "../../../firebase";
import { InfinitySpin } from "react-loader-spinner";
import NoteCard from "../UI/NoteCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const booksData = await fetchDataFromFirebase();
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="w-[100vw] absolute top-0">
      {loading ? (
        <div className="fixed bg-white top-0 w-full h-[100vh] flex items-center justify-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#0E1C36"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div>
          {books.map((book) => (
            <NoteCard
              key={book.id}
              title={book.title}
              code={book.code}
              links={book.note}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;

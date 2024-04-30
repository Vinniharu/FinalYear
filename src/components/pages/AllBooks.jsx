import React, { useState, useEffect } from "react";
import fetchFromFirebase from "../../../fetchFromFirebase";
import NoteCard from "../UI/NoteCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const booksData = await fetchFromFirebase();
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return <div className="p-4 font-bold text-red-600">{"Error fetching books: " + error}</div>;
      }
    };

    const fetchUserData = () => {
      
    }

    fetchBooks();
  }, []);

  return (
    <div className="w-full box-border">
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
  );
};

export default AllBooks;

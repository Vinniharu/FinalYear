import React, { useState, useEffect } from "react";
import fetchFromFirebase from "../../../fetchFromFirebase";
import { InfinitySpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import NoteCard from "../UI/NoteCard";

const LevelDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  let { levelId } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const booksData = await fetchFromFirebase();
        setBooks(
          levelId
            ? booksData.filter((item) => item.level === levelId)
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

export default LevelDisplay;

import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import fetchFromFirebase from "../../../fetchFromFirebase";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainPage = () => {
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [sidebarControl, setSidebarControl] = useState(true);
   let { levelId } = useParams();

   const onCloseSidebar = (sidebar) => {
     setSidebarControl(sidebar);
   };

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
      <div>
        <Navbar onClick={onCloseSidebar} />
        <div>
          <Sidebar onClick={onCloseSidebar} control={sidebarControl}/>
          <div className="overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage
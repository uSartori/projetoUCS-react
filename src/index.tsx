import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './output.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BookForm from './pages/BookForm.page';
import HomePage from './pages/home.page';
import { IBook } from './interfaces/IBook.interface';
import BookList from './pages/BookList.page';
import LoginPage from './pages/Login.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/create" element={<BookForm onAddBook={({ }: IBook): void => {}} />} />
        <Route path="/books/list" element={<BooksPage />} />
        <Route path="/login" element={<LoginPage />} />
     </Routes>
    </BrowserRouter>
 </React.StrictMode>
);

reportWebVitals();

import React, { useEffect, useState } from 'react';
import BookList from '../pages/BookList.page';
import { IBook } from '../interfaces/IBook.interface';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../firebase/config';

const db = getFirestore(app);

const HomePage = () => {
  const [apiBooks, setApiBooks] = useState<IBook[]>([]);
  const [firestoreBooks, setFirestoreBooks] = useState<IBook[]>([]);
  const [loadingApi, setLoadingApi] = useState(true);
  const [loadingFirestore, setLoadingFirestore] = useState(true);
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const [errorFirestore, setErrorFirestore] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://stephen-king-api.onrender.com/api/books')
      .then(res => {
        if (!res.ok) throw new Error('Erro na resposta da API');
        return res.json();
      })
      .then(json => {
        setApiBooks(json.data);
        setLoadingApi(false);
      })
      .catch(err => {
        setErrorApi(err.message);
        setLoadingApi(false);
      });
  }, []);

  useEffect(() => {
    async function fetchFirestoreBooks() {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const booksData: IBook[] = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          booksData.push({
            id: Number(doc.id),
            Title: data.Title,
            author: data.author,
            releaseDate: data.releaseDate,
            Year: data.Year
          });
        });
        setFirestoreBooks(booksData);
      } catch (error) {
        setErrorFirestore('Erro ao carregar livros do Firestore');
        console.error(error);
      } finally {
        setLoadingFirestore(false);
      }
    }
    fetchFirestoreBooks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Livros da API</h1>
        {loadingApi ? <p>Carregando livros da API...</p> : errorApi ? <p>{errorApi}</p> : <BookList books={apiBooks} />}
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4">Livros do Firestore</h1>
        {loadingFirestore ? <p>Carregando livros do Firestore...</p> : errorFirestore ? <p>{errorFirestore}</p> : <BookList books={firestoreBooks} title="LISTA DOS LIVROS CADASTRADOS PELO USUÁRIO" />}
      </section>
    </div>
  );
};

export default HomePage;

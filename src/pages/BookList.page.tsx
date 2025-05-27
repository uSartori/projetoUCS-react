import React from 'react';
import { IBook } from '../interfaces/IBook.interface';

interface BookListProps {
  books: IBook[];
  title?: string;
}

const BookList = ({ books, title = 'LISTA DE LIVROS DE STEPHEN KING' }: BookListProps) => {
  if (!Array.isArray(books)) {
    return <p className="text-red-600">Erro: dados inválidos para livros</p>;
  }

  if (books.length === 0) {
    return <p className="text-gray-500 italic">Nenhum livro encontrado.</p>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 underline">{title}</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">{book.Title}</h3>
            {book.author && (
              <p className="text-sm text-gray-700">
                Autor: <span className="font-medium">{book.author}</span>
              </p>
            )}
            <p className="text-sm text-gray-700">
              Ano de lançamento:{' '}
              <span className="font-medium">
                {book.Year || book.releaseDate || 'Desconhecido'}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

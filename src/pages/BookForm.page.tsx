import React, { useState } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import useForm from '../hooks/useForm';
import { doc, getFirestore, setDoc } from "firebase/firestore"; 
import { app } from '../firebase/config';

const db = getFirestore(app);

interface BookFormProps {
    onAddBook: (book: IBook) => void;
}

const BookForm = ({ onAddBook }: BookFormProps) => {
    const [Title, setTitle] = useState<string>('');
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [author, setAuthor] = useState<string>(''); 
    const [successMessage, setSuccessMessage] = useState<string>(''); 

    const { validate } = useForm();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newBookId = Date.now();
        const { errors, hasErrors } = validate({
            id: newBookId,
            Title,
            releaseDate,
            author, 
            Year: undefined
        });

        if (!hasErrors) {
            const newBook: IBook = {
                id: newBookId,
                Title,
                releaseDate,
                author, 
                Year: undefined
            };

            try {
                await setDoc(doc(db, "books", newBookId.toString()), {
                    Title,
                    releaseDate,
                    author
                });

                onAddBook(newBook);

                setTitle('');
                setReleaseDate('');
                setAuthor(''); 

                setSuccessMessage('Livro cadastrado com sucesso!');

                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } catch (error) {
                console.error("Erro ao salvar no Firestore:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                    Título:
                </label>
                <input
                    type="text"
                    id="title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">
                    Autor:
                </label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="releaseDate" className="block text-gray-700 font-semibold mb-2">
                    Ano de lançamento:
                </label>
                <input
                    type="text"
                    id="releaseDate"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    placeholder="ex: 1974"
                    required
                    maxLength={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
            >
                Cadastrar Livro
            </button>

            {successMessage && (
                <p className="mt-4 text-green-600 font-semibold text-center">
                    {successMessage}
                </p>
            )}
        </form>
    );
};

export default BookForm;

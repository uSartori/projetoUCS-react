import React from "react";

const NavComponent = () => {
  return (
  <nav>
    <ul className="flex space-x-6">
      <li>
        <a
          href="/books/list"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          LIVROS
        </a>
      </li>
      <li>
        <a
          href="/books/create"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          ADICIONAR NOVO LIVRO
        </a>
      </li>
      <li>
        <a
          href="/login"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          LOGIN
        </a>
      </li>
    </ul>
  </nav>
);

};

export default NavComponent;

import { IBook } from '../interfaces/IBook.interface';

interface ValidationErrors {
  title: string;
  releaseDate: string;
}

const useForm = () => {
  function validate(values: IBook): { errors: ValidationErrors; hasErrors: boolean } {
    const errors: ValidationErrors = {
      title: '',
      releaseDate: ''
    };

    if (!values.Title.trim()) {
      errors.title = "O título é obrigatório";
    }

    if (!values.releaseDate.trim()) {
      errors.releaseDate = "O ano de lançamento é obrigatório";
    } else if (!/^\d{4}$/.test(values.releaseDate.trim())) {
      errors.releaseDate = "Informe um ano válido com 4 dígitos";
    }

    const hasErrors = !!(errors.title || errors.releaseDate);

    return { errors, hasErrors };
  }

  return { validate };
};

export default useForm;

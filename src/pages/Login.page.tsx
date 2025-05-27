import { useState } from "react";
import { auth, provider, signInWithEmailAndPassword, signInWithPopup } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2500); 
    } catch (err) {
      setError("Erro ao fazer login com email e senha.");
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setSuccessMessage("");

    try {
      const result = await signInWithPopup(auth, provider);
      setSuccessMessage("Login com Google realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2500);
      console.log("Usuário logado:", result.user);
    } catch (err) {
      setError("Erro ao entrar com Google.");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">LOGIN</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">ou</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5 mr-2"
          />
          Entrar com Google
        </button>

        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
        {successMessage && <p className="mt-4 text-green-600 text-sm text-center">{successMessage}</p>}
      </div>
    </div>
  );
}

export default Login;

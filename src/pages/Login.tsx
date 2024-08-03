import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "Precisa ser no mínimo 6 caracteres"),
});

type loginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const [output, setOutput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onClickFunction = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const userRegistered = JSON.parse(
        localStorage.getItem("sucess_register") || "{}"
      );
      if (
        userRegistered.email === email &&
        userRegistered.password === password
      ) {
        localStorage.setItem(
          "sucess_login",
          JSON.stringify({
            name: userRegistered.name,
            email,
            password,
          })
        );
        return navigate("/home");
      }

      return setOutput(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen bg-zinc-900 flex items-center justify-center p-4">
      <form
        className="flex flex-col gap-6 w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit(onClickFunction)}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="p-2 rounded border border-gray-600 bg-white text-black placeholder-gray-500"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="p-2 rounded border border-gray-600 bg-white text-black placeholder-gray-500"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-400 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Entrar
        </button>
        <Link to="/register" className="mt-4 text-blue-400 hover:underline">
          Registrar
        </Link>
        {output && (
          <span className="text-red-400 text-center mt-4">
            Usuário não existe
          </span>
        )}
      </form>
    </main>
  );
};

export default Login;

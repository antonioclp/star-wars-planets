import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Nome de usuário obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z.string().nonempty("Email é obrigatório").email("Email inválido"),
  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "Precisa ser no mínimo 6 caracteres"),
});

type registerFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onClickFunction = (data: object) => {
    try {
      localStorage.setItem("sucess_register", JSON.stringify(data));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen bg-zinc-900 flex items-center justify-center p-4">
      <form
        className="flex flex-col gap-6 w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit(onClickFunction)}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Registrar</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="p-2 rounded border border-gray-600 bg-white text-black placeholder-gray-500"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="p-2 rounded border border-gray-600 bg-white text-black placeholder-gray-500"
            {...register("email")}
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
            {...register("password")}
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
          Registrar
        </button>
      </form>
    </main>
  );
};

export default Register;

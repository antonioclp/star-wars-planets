import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string()
    .nonempty('Nome de usuário obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      }).join(' ');
    }),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Precisa ser no mínimo 6 caracteres'),
});

type registerFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onClickFunction = (data: object) => {
    try {
      localStorage.setItem('sucess_register', JSON.stringify(data));
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main
      className=" h-screen bg-zinc-900 flex items-center justify-center"
    >
      <form
        className="flex flex-col gap-4 w-xs text-white"
        onSubmit={handleSubmit(onClickFunction)}
      >
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="name">Nome</label>
          <input
            className="text-black"
            type="text"
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="email">Email</label>
          <input
            className="text-black"
            type="text"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="password">Senha</label>
          <input
            className="text-black"
            type="password"
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          type="submit"
        >
          Registrar
        </button>
      </form>
    </main>
  );
};

export default Register;
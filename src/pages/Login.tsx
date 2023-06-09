import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const loginSchema = z.object({
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Precisa ser no mínimo 6 caracteres'),
});

type loginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const [output, setOutput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onClickFunction = ({ email, password }: { email: string, password: string }) => {
    try {
      const userRegistered = JSON.parse(localStorage.getItem('sucess_register') || '{}');
      if (userRegistered.email === email && userRegistered.password === password) {
        localStorage.setItem('sucess_login', JSON.stringify({
          name: userRegistered.name,
          email,
          password
        }));
        return navigate('/home');
      }

      return setOutput(true);
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="text-black"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="text-black"
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          type="submit"
        >
          Entrar
        </button>
        {output && <span>Usuário não existe</span>}
      </form>
    </main >
  );
};

export default Login;
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Navbar from "@/components/navbar";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface LoginProps {
  searchParams: Promise<Message>;
}

export default async function SignInPage({ searchParams }: LoginProps) {
  const message = await searchParams;

  if ("message" in message) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center p-4 sm:max-w-md">
        <FormMessage message={message} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-indigo-100 px-4 py-8">
        <div className="w-full max-w-md rounded-lg border border-indigo-200 bg-white p-6 shadow-xl">
          <form className="flex flex-col space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-indigo-600">Entrar</h1>
              <p className="text-sm text-indigo-600">
                Ainda não tem uma conta?{" "}
                <Link
                  className="text-indigo-700 font-medium hover:underline transition-all"
                  href="/sign-up"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  required
                  className="w-full border-indigo-300 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Senha
                  </Label>
                  <Link
                    className="text-xs text-indigo-500 hover:text-indigo-700 hover:underline transition-all"
                    href="/forgot-password"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Sua senha"
                  required
                  className="w-full border-indigo-300 focus:ring-indigo-500"
                />
              </div>
            </div>

            <SubmitButton
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
              pendingText="Entrando..."
              formAction={signInAction}
            >
              Entrar
            </SubmitButton>

            <FormMessage message={message} />
          </form>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Serviços Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Consultas Psicológicas
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Testes Psicológicos
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Terapia em Grupo
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Área do Paciente
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Para Psicólogos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Segurança
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} PsicoGestão. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Brain,
  Calendar,
  FileText,
  Clock,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma variedade de serviços psicológicos para atender às
              suas necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Consultas Psicológicas",
                description:
                  "Atendimento personalizado com profissionais qualificados",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Agendamento Flexível",
                description:
                  "Marque consultas de acordo com sua disponibilidade",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Testes Psicológicos",
                description: "Avaliações completas com resultados detalhados",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacidade Garantida",
                description: "Seus dados e informações sempre protegidos",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Acompanhamento Contínuo",
                description: "Monitoramento de progresso e evolução",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Terapia em Grupo",
                description:
                  "Sessões colaborativas para compartilhar experiências",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um processo simples e eficiente para cuidar da sua saúde mental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Cadastre-se</h3>
              <p className="text-gray-600">
                Crie sua conta como paciente ou psicólogo em poucos minutos.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Agende</h3>
              <p className="text-gray-600">
                Escolha o tipo de consulta, data e horário que melhor se adequam
                a você.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Receba Atendimento</h3>
              <p className="text-gray-600">
                Participe das consultas e acesse seus resultados diretamente na
                plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-indigo-100">Consultas Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Psicólogos Parceiros</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-100">Satisfação dos Pacientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pacientes que já estão cuidando da sua saúde
            mental com nossa plataforma.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Criar Conta Agora
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

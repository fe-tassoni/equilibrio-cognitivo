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
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços Neuropsicológicos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama de serviços especializados em avaliações
              neuropsicológicas para entender melhor seu desempenho cognitivo e
              emocional, visando proporcionar diagnósticos precisos e personalizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Avaliação Cognitiva",
                description:
                  "Exames detalhados para avaliar funções cognitivas como memória, atenção, e habilidades linguísticas.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Agendamento Flexível",
                description:
                  "Agende suas avaliações neuropsicológicas conforme sua disponibilidade.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Laudos Neuropsicológicos",
                description: "Receba relatórios detalhados com interpretações clínicas dos testes realizados.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacidade Garantida",
                description: "Seus dados e informações estão sempre protegidos com confidencialidade.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Acompanhamento de Resultados",
                description: "Monitoramento contínuo da evolução cognitiva e recomendação de intervenções.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Consultoria para Profissionais",
                description:
                  "Sessões de apoio e orientação para psicólogos e outros profissionais da saúde mental.",
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
              Um processo simples e eficiente para obter uma avaliação
              neuropsicológica detalhada e precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Cadastre-se</h3>
              <p className="text-gray-600">
                Crie sua conta como paciente ou neuropsicólogo em poucos minutos.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Agende</h3>
              <p className="text-gray-600">
                Escolha o tipo de avaliação e agende o horário mais conveniente.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Receba o Laudo</h3>
              <p className="text-gray-600">
                Receba seu laudo neuropsicológico completo com recomendações de acompanhamento.
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
              <div className="text-indigo-100">Avaliações Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Profissionais Qualificados</div>
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
          <h2 className="text-3xl font-bold mb-4">Pronto para Iniciar sua Avaliação?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a pacientes que já estão entendendo melhor sua saúde cognitiva com nossas avaliações
            neuropsicológicas de alta precisão.
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

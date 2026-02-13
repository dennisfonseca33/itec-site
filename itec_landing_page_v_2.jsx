export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <img
          src="/logo.png"
          alt="ITEC Engenharia"
          className="mx-auto w-40 mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Engenharia, Confiabilidade e Performance
          <br />
          <span className="text-emerald-600">para sua Indústria</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Diagnóstico técnico gratuito para identificar falhas, reduzir custos
          operacionais e aumentar a disponibilidade dos seus ativos industriais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5583986077888"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition"
          >
            Falar no WhatsApp
          </a>

          <a
            href="mailto:dennis@iteceng.com.br"
            className="border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Enviar e-mail
          </a>
        </div>

        <p className="text-sm text-slate-400 mt-6">
          Resposta rápida • Atendimento técnico especializado
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Redução de custos",
              desc: "Identificação de falhas ocultas e desperdícios operacionais.",
            },
            {
              title: "Aumento da disponibilidade",
              desc: "Melhoria da confiabilidade dos ativos e menos paradas não planejadas.",
            },
            {
              title: "Decisão baseada em dados",
              desc: "Diagnósticos técnicos com metodologia de engenharia e indicadores claros.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Solicite um diagnóstico técnico gratuito
        </h2>

        <p className="text-slate-600 mb-10">
          Conversa inicial sem compromisso para entender seus desafios
          operacionais.
        </p>

        <a
          href="https://wa.me/5583986077888"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg transition"
        >
          Falar com um especialista agora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ITEC Engenharia • dennis@iteceng.com.br
      </footer>
    </main>
  );
}

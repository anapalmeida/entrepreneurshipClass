export default function Section3() {
  const content = [
    {
      title: "Empreendedorismo Individual",
      text: "Caracterizado pela atuação de uma pessoa na criação e operação de seu próprio empreendimento, incluindo modalidades como MEI, EI e EIRELI.",
    },
    {
      title: "Empreendedorismo Corporativo",
      text: "Envolvimento de funcionários em uma empresa existente para desenvolver soluções inovadoras e promover a evolução contínua.",
    },
    {
      title: "Empreendedorismo Feminino",
      text: "Empresas criadas ou lideradas por mulheres, promovendo o empoderamento feminino e a liderança feminina nos negócios.",
    },
    {
      title: "Empreendedorismo Verde",
      text: "Empreendimentos que priorizam a preservação ambiental, incorporando práticas sustentáveis e responsáveis.",
    },
    {
      title: "Empreendedorismo Social",
      text: "Foco em serviços ou produtos que proporcionam vantagens a uma parte específica da sociedade, visando melhorar as condições de vida.",
    },
    {
      title: "Empreendedorismo Sustentável",
      text: "Negócios que buscam equilíbrio entre aspectos econômicos, sociais e ambientais, considerando os impactos de suas ações no meio ambiente e na sociedade.",
    },
    {
      title: "Empreendedorismo Cooperativo",
      text: "União de empreendedores individuais para colaboração, compartilhamento de conhecimento e recursos.",
    },
    {
      title: "Empreendedorismo de Franquias",
      text: "Modelo mais seguro que incorpora processos estabelecidos e produtos reconhecíveis por meio do sistema de franquias.",
    },
    {
      title: "Empreendedorismo Cultural",
      text: "Concentrado na criação, desenvolvimento e promoção de atividades e projetos relacionados à cultura, às artes e ao patrimônio.",
    },
  ];
  return (
    <div id="5" className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col bg-white transition-colors duration-700 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
          <div className="pt-6 pb-12 md:pt-10 md:pb-20">
            <section data-bg-className="bg-sky-200">
              <h1 className="mt-2 text-3xl font-extrabold  tracking-tight text-gray-900 sm:text-4xl">
                Tipos de empreendedorismo
              </h1>
              <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                O empreendedorismo vai além da mera criação de empresas,
                abrangendo uma variedade de abordagens centradas na geração de
                soluções inovadoras para desafios e oportunidades de mercado.
                Neste contexto, são apresentados nove tipos de empreendedorismo:
              </p>

              <div className="max-w-3xl mx-auto">
                <div className="py-6 md:py-10">
                  <div className="max-w-sm mx-auto sm:max-w-none grid sm:grid-cols-2 sm:grid-rows-3 gap-6">
                    {content.map((item, index) => {
                      return (
                        <article className="bg-white rounded-2xl shadow shadow-sky-900/10 p-6">
                          <div className="space-y-10">
                            <div>
                              <div className="text-yellow-400 mb-7 w-1 h-1 font-extrathin text-2xl">
                                {index + 1}
                              </div>
                              <h2 className="text-xl font-bold text-slate-800 mb-2">
                                {item?.title}
                              </h2>
                              <p className="mt-6 font-light text-gray-600  dark:text-gray-400">
                                {item?.text}
                              </p>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="font-light text-gray-600 text-xs dark:text-gray-400 inline">
                Fontes:
                <a
                  target="_blank"
                  href="https://serasa.certificadodigital.com.br/blog/e-cnpj/tipos-de-empreendedorismo/"
                  className="font-light text-xs  text-blue-400 inline hover:text-black"
                  alt=""
                >
                  https://serasa.certificadodigital.com.br/blog/e-cnpj/tipos-de-empreendedorismo/
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://blog.omie.com.br/quais-sao-os-tipos-de-empreendedorismo-conheca-9-tipos/"
                  className="font-light text-xs  text-blue-400  hover:text-black"
                  alt=""
                >
                  https://blog.omie.com.br/quais-sao-os-tipos-de-empreendedorismo-conheca-9-tipos/
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

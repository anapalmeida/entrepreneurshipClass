import pic6 from "../../assets/6.jpg";

export default function Section1() {
  return (
    <div
      id="2"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-extrabold  tracking-tight text-gray-900 sm:text-4xl">
                Afinal, o que é empreendedorismo?
              </h1>
              <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                O empreendedorismo engloba a capacidade de identificar
                oportunidades, transformá-las em negócios e contribuir para a
                inovação e o desenvolvimento econômico e social. Além de abrir
                empresas e gerar empregos, os empreendedores são agentes de
                inovação que melhoram a qualidade de vida das pessoas.
              </p>
              <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                No contexto brasileiro, o empreendedorismo tem se destacado, com
                um aumento na taxa de empreendedorismo estabelecido. O país
                possui uma expressiva presença de empreendedores ativos e
                potenciais, e as micro e pequenas empresas desempenham um papel
                fundamental na economia, respondendo por grande parte das
                empresas e empregos.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-12 lg:mt-12 lg:p-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="lg:w-[48rem] lg:max-w-none lg:rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={pic6}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7  font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                O empreendedorismo é definido como a capacidade de identificar
                problemas e oportunidades, desenvolver soluções e investir
                recursos na criação de algo positivo para a sociedade, seja um
                negócio, projeto ou movimento. Joseph Schumpeter associa o
                empreendedorismo à inovação, destacando o papel do empreendedor
                na realização de novas combinações, como a introdução de novos
                bens, métodos de produção ou abertura de novos mercados.
              </p>

              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                O que é ser empreendedor?
              </h2>
              <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                Ser empreendedor envolve características como otimismo,
                autoconfiança, coragem, persistência e resiliência. O
                comportamento empreendedor refere-se a um conjunto de
                capacidades que transformam ideias em ação, envolvendo
                criatividade na solução de problemas, proatividade e busca de
                oportunidades.
              </p>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                E o empresário?
              </h2>
              <p className="mt-6">
                Empresários, por sua vez, têm competências voltadas para a
                perpetuação da empresa, focando na gestão eficaz e na
                administração sem necessariamente buscar inovações constantes. O
                empreendedorismo no Brasil tem potencial de crescimento, e quem
                deseja empreender pode se beneficiar de dicas como definir a
                atividade, planejar, buscar escalabilidade e conversar com
                especialistas.
              </p>
              <p className="font-light   text-gray-600 text-xs dark:text-gray-400 inline">
                Fonte:
                <a
                  target="_blank"
                  href=" https://www.sebrae-sc.com.br/blog/o-que-e-empreendedorismo"
                  className="font-light text-xs  text-blue-400 inline hover:text-black"
                  alt=""
                >
                  https://www.sebrae-sc.com.br/blog/o-que-e-empreendedorismo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

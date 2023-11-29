import pic3 from "../../assets/3.jpg";
import pic8 from "../../assets/8.jpg";

export default function Section2() {
  return (
    <section id="4" class="bg-white dark:bg-gray-900">
      <div className="items-center py-1 px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          O comportamento do empreendedor
        </h2>
        <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
          Para além de abrir um negócio, o comportamento empreendedor abrange a
          mentalidade que impulsiona o sucesso em várias áreas da sua vida. A
          seguir estão alguns pontos-chaves para entender e desenvolver um
          comportamento empreendedor:
        </p>
      </div>
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src={pic3} alt="office content 1" />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src={pic8}
            alt="office content 2"
          />
        </div>
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
            Visão Orientada ao Futuro
          </h3>
          <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
            Uma visão focada no futuro, na superação de desafios e na
            identificação de oportunidades define o comportamento empreendedor.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
            Autoconhecimento
          </h3>
          <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
            O autoconhecimento é fundamental para entender habilidades,
            limitações e emoções. Reconhecer as próprias emoções e entender seu
            comportamento contribui para uma melhor administração das
            adversidades.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
            Inteligência Emocional
          </h3>
          <p className="mt-6 text-xl leading-8 font-light text-gray-600 sm:text-lg dark:text-gray-400">
            A inteligência emocional é uma competência-chave para empreendedores
            de sucesso. Reconhecer emoções, tanto em si mesmo quanto nos outros,
            ajuda na gestão de situações desafiadoras e imprevistos.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
            Outras características importantes para o comportamento empreendedor
          </h3>
          <div className="pr-4 mb-5">
            <ul className="mt-6 ml-6 max-w-md list-disc list-inside	space-y-1   text-gray-600 sm:text-lg dark:text-gray-400">
              <li className="text-base">
                Define metas claras, específicas e factíveis, com significado
                pessoal.
              </li>
              <li className="text-base">
                Demonstra iniciativa, busca oportunidades e trabalha bem sob
                pressão.
              </li>
              <li className="text-base">
                Aceita riscos, mantém motivação e entusiasmo. Busca qualidade, é
                criativo, foca no cliente e busca atualização constante.
              </li>
              <li className="text-base">
                Organiza e planeja, forma redes de contatos e mantém foco em
                resultados.
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-light text-gray-600 text-xs dark:text-gray-400 inline">
              Fontes:
              <a
                target="_blank"
                href="https://bit.ly/47PspQh"
                className="font-light text-xs  text-blue-400 inline hover:text-black"
                alt=""
              >
                https://bit.ly/47PspQh
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.fcdl-sc.org.br/fcdl-noticias/o-que-e-comportamento-empreendedor-segundo-tres-especialistas-2/"
                className="font-light text-xs  text-blue-400  hover:text-black"
                alt=""
              >
                https://www.fcdl-sc.org.br/fcdl-noticias/o-que-e-comportamento-empreendedor-segundo-tres-especialistas-2/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

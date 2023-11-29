import { motion, useMotionValue, useTransform } from "framer-motion";
import foo from "../../assets/background.svg";
import "./style.css";
import Menu from "../../components/Menu";

export default function Hero() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 300], [10, -10]);
  const rotateY = useTransform(x, [0, 300], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <>
      <div id="1" className="container h-screen flex items-center">
        <motion.img
          className="flex justify-center items-center w-50 absolute overflow-hidden opacity-20 left-0  object-cover"
          aria-hidden="true"
          src={foo}
          alt="foo"
          style={{
            perspective: 400,
            rotateX,
            rotateY,
          }}
          onMouseMove={handleMouse}
        />
        <Menu />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Jornada Empreendedora
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Seu portal de informações para o Mundo do Empreendedorismo
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import ClienteClaro from "../assets/cliente_claro.png";
import ClienteUBDP from "../assets/cliente_ubdp.png";
import ClientePresidencia from "../assets/cliente_presidencia.png";
import ClienteGenerico from "../assets/cliente_generico.png";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function CarrouselWeb() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1 },
      },
      "(min-width: 641px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 5},
      },
    },
  });

  const images = [
    { src: ClienteClaro, alt: "Claro" },
    { src: ClienteUBDP, alt: "UBDP" },
    { src: ClientePresidencia, alt: "Presidencia" },
    { src: ClienteGenerico, alt: "Otro cliente" },
  ];

  return (
    <section className="py-8">
      <h2 className="text-center text-[#123a54] text-2xl font-semibold mb-4">
        Clientes que confían en nosotros
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={img.src}
              alt={img.alt}
              className="transition-transform duration-300 hover:scale-110 w-52 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

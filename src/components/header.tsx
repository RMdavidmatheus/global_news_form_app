import LogoSVG from "./logo-svg";

export function HeaderWeb() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0d2c6d] to-[#123a54] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        <LogoSVG/>
        <h1 className="text-3xl md:text-3xl font-bold leading-tight">
          Descubre lo que los datos están diciendo antes que <br />
          <span className="text-white">tu competencia</span>
        </h1>
        <p className="text-lg md:text-lg">
          Monitoreo estratégico de medios y análisis de datos para líderes
          informados
        </p>
      </div>
    </header>
  );
}

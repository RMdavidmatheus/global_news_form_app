export function InfoCards() {
  return (
    <div>
      {/* First content */}
      <div className="flex flex-col space-y-6 p-6 max-w-4xl mx-auto">
        <h2 className="text-[#123A54] font-semibold text-2xl">
          Nuestros informes son tu ventaja competitiva
        </h2>
        <p className="">
          Te entregamos reportes claros, útiles y personalizados que permiten
          tomar decisiones basadas en evidencia. Analizamos lo que dicen los
          medios, las redes y las audiencias clave, y lo convertimos en
          información accionable para tu empresa o institución.
        </p>
      </div>
      {/* Second content */}
      <div className="flex flex-col space-y-6 p-6 max-w-4xl mx-auto">
        <h2 className="text-[#123A54] font-semibold text-2xl">
          ¿Qué obtienes con nuestro servicio?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>🔎 Monitoreo 24/7 de medios, redes y fuentes clave.</li>
          <li>📊 Análisis de datos personalizado según tu sector.</li>
          <li>🚨 Alertas automáticas ante menciones relevantes.</li>
          <li>📄 Informes ejecutivos claros, útiles y accionables.</li>
          <li>🔐 Seguridad y confidencialidad garantizadas.</li>
        </ul>
      </div>
      {/* Third content */}
      <div className="flex flex-col gap-2 p-6 max-w-4xl mx-auto">
        <h2 className="text-[#123A54] font-semibold text-2xl">
          ¿Para quién es esto?
        </h2>
        <p>
          Dirigido a empresas públicas y privadas de sectores como salud, banca,
          gobierno, energía, transporte y tecnología.
        </p>
        <p>
          Ideal para áreas de comunicación, relaciones públicas, inteligencia de
          mercado y planeación estratégica.
        </p>
      </div>
      {/* Fourth content */}
      <div className="flex flex-col gap-2 p-6 max-w-4xl mx-auto">
        <h2 className="text-[#123A54] font-semibold text-2xl">
          Reconocimientos internacionales
        </h2>
        <p>
          GlobalNews ha sido galardonado con <strong>8 premios AMEC</strong> por
          excelencia en medición y análisis de comunicación, destacando nuestro
          compromiso con la calidad y el impacto estratégico.
        </p>
      </div>
    </div>
  );
}

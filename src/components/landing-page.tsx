const galleryImages = Array.from({ length: 22 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    url: `/assets/img/image${String(id).padStart(5, '0')}.jpeg`,
    alt: `NITIDO Barber Studio galería ${id}`,
  };
});

const services = [
  ['CORTE MODERNO 12€', '(TIEMPO APROX. 35 MIN)'],
  ['CORTE Y CEJAS 14€', '(TIEMPO APROX. 35 MIN)'],
  ['CORTE Y BARBA 17€', '(TIEMPO APROX. 45 MIN)'],
  ['CORTE Y LAVADO 15€', '(TIEMPO APROX. 35 MIN)'],
  ['CORTE, BARBA Y CEJAS 19€', '(TIEMPO APROX. 45 MIN)'],
  ['CORTE, BARBA, CEJAS Y LAVADO 22€', '(TIEMPO APROX. 60 MIN)'],
  ['CORTE PREMIUM 15€', '(TIEMPO APROX. 45 MIN)'],
  ['CORTE NIÑO O JUBILADO 7€', '(TIEMPO APROX. 20 MIN)'],
  ['ARREGLO DE BARBA 8€', '(TIEMPO APROX. 15 MIN)'],
  ['MECHAS 35€', '(INCLUYE CORTE. TIEMPO APROX. 150 MIN)'],
  ['DECOLORACIÓN 55€', '(INCLUYE CORTE. TIEMPO APROX. 180MIN)'],
];

const bookingUrl =
  'https://booksy.com/es-es/124137_nitido-barber-studio_barber-shop_101746_zaragoza';

export function LandingPage() {
  return (
    <>
      <div className="hero w-full h-screen flex">
        <div className="container-fluid m-0 px-0 flex flex-row h-full">
          <div className="col-sm-6 col-md-6 flex flex-col justify-center items-center p-0 m-auto ">
            <a
              href="https://www.instagram.com/nitido.barberstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="m-auto p-0">
                <img
                  className="max-w-full max-h-full  rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  src="/assets/img/logo2.png"
                  alt="Nitido"
                />
              </div>
            </a>

            <div className="hero-text text-center p-4 ">
              <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed">
                Tu imagen, Nuestra pasión. En NITIDO cada detalle está pensado
                para ti. ¡Ven y disfruta de un servicio de calidad donde la
                precisión y el buen gusto se encuentra!
              </p>
            </div>

            <div className="m-auto p-2 w-full max-w-52 bg-gray-200 bg-opacity-75 text-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-black hover:text-white">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline text-lg md:text-xl hover:font-light leading-relaxed text-center"
              >
                <span>Reservar</span>
              </a>
            </div>

            <div className="mt-1.5 p-2 w-full max-w-52 bg-gray-200 bg-opacity-75 text-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-black hover:text-white">
              <a
                href="#servicios"
                rel="noopener noreferrer"
                className="no-underline block text-lg md:text-xl hover:font-light leading-relaxed text-center"
              >
                <span>Ver los servicios</span>
              </a>
            </div>
          </div>

          <div
            className="col-sm-6 col-md-6 p-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/image00001.jpeg')" }}
          />
        </div>
      </div>

      <div className="team bg-gray-100">
        <div className="container mx-auto py-16">
          <div className="section-header text-center mb-12">
            <h2 className="text-5xl font-bold font-bold text-black">
              CONOZCA A NUESTRO BARBERO
            </h2>
          </div>

          <div className="text-center p-4">
            <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed">
              En NITIDO, nos especializamos en resaltar lo mejor de tu estilo
              con precisión y detalle. Ya sea que busques un corte clásico,
              moderno o algo único, nuestro equipo está listo para ofrecerte un
              servicio impecable en un ambiente relajado y cómodo. Cada visita a
              nuestra barbería es una experiencia pensada para ti, porque
              sabemos que un buen corte no es solo una cuestión de apariencia,
              es una declaración de personalidad.{' '}
            </p>
          </div>

          <div className="flex flex-nowrap justify-center gap-10">
            <div className="team-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <a
                href="https://www.instagram.com/blaskkoo"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="team-img">
                  <img
                    className="w-80 h-80 object-cover transition duration-300 transform hover:scale-110 hover:opacity-90"
                    src="/assets/img/blasko.jpeg"
                    alt="Team Image"
                  />
                </div>
                <div className="team-text text-center p-6">
                  <p
                    className="text-3xl font-bold text-gray-800"
                    style={{ fontFamily: 'NewYork' }}
                  >
                    BLASKO
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          id="servicios"
          className="py-16 bg-gray-900 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/img/image00016.jpeg')" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1
                className="text-5xl font-bold text-white"
                style={{ fontFamily: 'NewYork' }}
              >
                SERVICIOS
              </h1>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center">
              <div className="w-full lg:w-2/3 mb-8 lg:mb-0 bg-gray-700 bg-opacity-60 rounded-2xl m-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {services.map(([name, time]) => (
                    <li key={name}>
                      <p className="text-xl font-semibold text-white">
                        {name}
                      </p>
                      <p className="text-sm text-white">{time}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="m-auto mt-4 p-2 w-full max-w-52 bg-gray-200 bg-opacity-40 text-black font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-black ">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline text-lg md:text-xl hover:font-dark leading-relaxed text-center"
              >
                <span>RESERVAR</span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-900 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-5xl font-bold text-white"
                style={{ fontFamily: 'NewYork' }}
              >
                GALERIA
              </h2>
              <h3
                className="text-3xl font-bold text-white mt-4"
                style={{ fontFamily: 'NewYork' }}
              >
                EXPLORA NUESTRO ESPACIO
              </h3>
            </div>

            <div className="relative">
              <div id="carousell" className="flex gap-6 grid-rows-2 animate-scroll">
                {galleryImages.map((image) => (
                  <div
                    className="image-item flex-none w-80 h-64 overflow-hidden rounded-lg shadow-lg"
                    key={image.id}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={image.url}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

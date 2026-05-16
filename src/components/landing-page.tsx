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
      <div className="youth-page">
      <section className="youth-hero">
        <div className="youth-hero__content">
          <div className="youth-hero__copy">
            <a
              href="https://www.instagram.com/nitido.barberstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="youth-hero__logo-link"
            >
              <img
                className="youth-hero__logo"
                src="/assets/img/logo2.png"
                alt="Nitido"
              />
            </a>

            <h1 className="youth-hero__title">Tu corte. Tu actitud.</h1>
            <p className="youth-hero__text">
              Tu imagen, Nuestra pasión. En NITIDO cada detalle está pensado
              para ti. ¡Ven y disfruta de un servicio de calidad donde la
              precisión y el buen gusto se encuentra!
            </p>

            <div className="youth-hero__actions">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="youth-button youth-button--primary"
              >
                Reservar
              </a>
              <a
                href="#servicios"
                rel="noopener noreferrer"
                className="youth-button youth-button--ghost"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div
            className="youth-hero__image"
            style={{ backgroundImage: "url('/assets/img/image00001.jpeg')" }}
          >
            <div className="youth-hero__image-glow" />
          </div>
        </div>
      </section>

      <section className="youth-section youth-section--light">
        <div className="youth-container">
          <div className="youth-section__header">
            <h2>CONOZCA A NUESTRO BARBERO</h2>
            <p>
              Estilo limpio, técnica precisa y una experiencia pensada para que
              salgas con flow propio.
            </p>
          </div>

          <div className="youth-intro">
            <p>
              En NITIDO, nos especializamos en resaltar lo mejor de tu estilo
              con precisión y detalle. Ya sea que busques un corte clásico,
              moderno o algo único, nuestro equipo está listo para ofrecerte un
              servicio impecable en un ambiente relajado y cómodo. Cada visita a
              nuestra barbería es una experiencia pensada para ti, porque
              sabemos que un buen corte no es solo una cuestión de apariencia,
              es una declaración de personalidad.
            </p>
          </div>

          <div className="youth-barber-wrap">
            <div className="youth-barber-card">
              <a
                href="https://www.instagram.com/blaskkoo"
                className="youth-barber-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="youth-barber-card__image">
                  <img
                    src="/assets/img/blasko.jpeg"
                    alt="Team Image"
                  />
                </div>
                <div className="youth-barber-card__body">
                  <p>BLASKO</p>
                  <span>@blaskkoo</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
          id="servicios"
          className="youth-services"
          style={{ backgroundImage: "url('/assets/img/image00016.jpeg')" }}
        >
          <div className="youth-services__overlay">
          <div className="youth-container">
            <div className="youth-section__header youth-section__header--dark">
              <h2>SERVICIOS</h2>
              <p>Cortes, barba y color con acabado fresco.</p>
            </div>

            <div className="youth-price-panel">
                <ul className="youth-price-grid">
                  {services.map(([name, time]) => (
                    <li key={name}>
                      <p>{name}</p>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
            </div>

            <div className="youth-services__cta">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="youth-button youth-button--primary"
              >
                RESERVAR
              </a>
            </div>
          </div>
          </div>
        </section>

        <section className="youth-gallery">
          <div className="youth-container">
            <div className="youth-section__header youth-section__header--dark">
              <h2>GALERIA</h2>
              <p>EXPLORA NUESTRO ESPACIO</p>
            </div>

            <div className="youth-gallery__rail">
              <div id="carousell" className="youth-gallery__track animate-scroll">
                {galleryImages.map((image) => (
                  <div
                    className="youth-gallery__item"
                    key={image.id}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

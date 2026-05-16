const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.0873972354575!2d-3.7772825303836846!3d40.35677219821557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189ba3d22ebeb%3A0xe61c8c3e711b75ca!2sNITIDO%20BARBER%20STUDIO!5e0!3m2!1ses-419!2scu!4v1732812518175!5m2!1ses-419!2scu';

export function Footer() {
  return (
    <footer className="youth-footer">
      <div className="youth-footer__grid">
        <div className="youth-footer__content">
          <div>
            <img
              src="/assets/img/logo2.png"
              alt="Nitido"
              className="youth-footer__logo"
            />
            <h2>Tu próximo corte empieza acá.</h2>
            <p>
              Avenida de la Libertad, 64 · Leganés (La Fortuna) 28917
            </p>
            <div className="youth-footer__social">
              <a href="https://www.instagram.com/nitido.barberstudio">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:nitidobarberstudio@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+34 694 45 57 26">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <iframe
          src={mapUrl}
          className="youth-footer__map"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de NITIDO Barber Studio"
        />
      </div>
    </footer>
  );
}

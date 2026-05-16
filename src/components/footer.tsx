const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.0873972354575!2d-3.7772825303836846!3d40.35677219821557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189ba3d22ebeb%3A0xe61c8c3e711b75ca!2sNITIDO%20BARBER%20STUDIO!5e0!3m2!1ses-419!2scu!4v1732812518175!5m2!1ses-419!2scu';

export function Footer() {
  return (
    <div className="footer">
      <div className="row w-full p-4">
        <div className="col-sm-6 col-md-6 w-full">
          <div className="footer-contact w-full pt-2.5">
            <h2>DIRECCIÓN</h2>
            <p>
              <i className="fa fa-map-marker-alt"></i>Avenida de la Libertad,
              64 Leganés (La Fortuna) 28917
            </p>
            <div className="footer-social">
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
        <div className="col-sm-6 col-md-6 w-full p-0">
        <iframe
          src={mapUrl}
          className="w-full"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de NITIDO Barber Studio"
        />
        </div>
      </div>
    </div>
  );
}

import photo from '../assets/business-card-photo.png';
import linkedin from '../assets/linkedin.png';

export default function Info() {
  return (
    <section className='top background'>
      <div className='info'>
        <img src={photo} alt='' />
        <h1>Laura Smith</h1>
        <h2>Fontend Developer</h2>
        <h3>laurasmith.com</h3>
        <section className='buttons'>
          <button className='left'>
            <span>✉️</span> Email
          </button>
          <button className='right'>
            <img className='linkedin' src={linkedin} alt='linkedin' /> LinkedIn
          </button>
        </section>
      </div>
    </section>
  );
}

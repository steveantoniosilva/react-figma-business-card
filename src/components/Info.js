import photo from '../assets/head.jpg';
import linkedin from '../assets/linkedin.png';

export default function Info() {
  return (
    <section className='top background'>
      <div className='info'>
        <img src={photo} alt='' />
        <h1>Trent Smith</h1>
        <h2>Fontend Developer</h2>
        <h3>trentsmith.com</h3>
        <section className='buttons'>
          <a href='https://mailchimp.com/' target='_blank' rel='noreferrer'>
            <button className='left'>
              <span className='envelope'>✉️</span> Email
            </button>
          </a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <button className='right'>
              <img className='linkedin' src={linkedin} alt='linkedin' />{' '}
              LinkedIn
            </button>
          </a>
        </section>
      </div>
    </section>
  );
}

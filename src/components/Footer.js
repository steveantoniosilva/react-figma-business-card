import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import fb from '../assets/fb.png';

export default function Footer() {
  return (
    <section className='background'>
      <div className='footer'>
        <a href='https://www.github.com/' target='_blank'>
          <img src={github} alt='' />
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <img src={instagram} alt='' />
        </a>
        <a href='https://www.twitter.com/' target='_blank'>
          <img src={twitter} alt='' />
        </a>
        <a href='https://www.facebook.com/' target='_blank'>
          <img src={fb} alt='' />
        </a>
      </div>
    </section>
  );
}

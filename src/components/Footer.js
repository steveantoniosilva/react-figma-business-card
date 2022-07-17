import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import fb from '../assets/fb.png';

export default function Footer() {
  return (
    <section className='background'>
      <div className='footer'>
        <img src={github} alt='' />
        <img src={instagram} alt='' />
        <img src={twitter} alt='' />
        <img src={fb} alt='' />
      </div>
    </section>
  );
}

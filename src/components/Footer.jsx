import { LogoWhite } from "../assets";

const Footer = () => (
  <footer className='bg-primary py-12'>

    <div className='container mx-auto text-white flex items-center gap-5 sm:justify-between flex-col sm:flex-row'>
      <a href="/" >
        {/* <LogoWhite /> */}
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEF5TAjr__n5HfQYPiqE53lIdJImzQwP75IA&s" 
              style={{height:50}} />
      </a>
      <div className="flex flex-col items-center">
        <p>Mady By Sandeep Prasad Copyright &copy; {new Date().getFullYear()}, All Right Reserved,</p>
      </div>
    </div>

  </footer>
);

export default Footer;
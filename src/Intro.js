import '../src/Intro.css';
import profile from "./image/image.png"

function Intro() {
  return (
    <div className="App">
    <nav className='bg-white sm:bg-black h-16'>
      <ul className='flex justify-between sm:float-right mx-10 mt-6 text-center'>
        <li><a href='https://www.behance.net/shivamkaushik1' className=' text-black font-bold px-0 mx-0 sm:text-white sm:mx-4 sm:px-4'>Behance</a></li>
        <li><a href='https://dribbble.com/Shivamkaushik' className='text-black font-bold px-0 mx-0 sm:text-white sm:mx-4 sm:px-4 '>Dribbble</a></li>
        <li><a href='https://www.linkedin.com/in/shivam-kaushik-b8340114b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BosKtHSFqSr%2BqjtfvOL1KEQ%3D%3D' className='text-black font-bold px-0 mx-0 sm:text-white sm:mx-4 sm:px-4 '>Linkedin</a></li>
      </ul>
    </nav>
    <div className='body block mt-0 py-10 sm:grid text-left min-h-full grid-cols-2 justify-items-center items-center sm:mt-28'>
    <>
      <img src={profile} className= "2xl:max-w-xl xl:max-w-lg float-right lg:max-w-sm sm:max-w-xs" alt='profile'></img>
    </>
    <div className=' text-center sm:text-left'>
      <h3 className='heading text-4xl 2xl:text-8xl xl:text-7xl lg:text-5xl'>Hello! I'm</h3>
      <h2 className='name text-3xl font-bold 2xl:text-8xl mt-4 xl:text-7xl mt-4 lg:text-5xl'>Shivam Kaushik</h2>
      <h4 className='name text-2xl mt-3 font-regular 2xl:text-6xl mt-7 xl:text-5xl mt-4 lg:text-4xl mt-3'> Designer🖥 and Developer👩‍💻</h4>
      <a href = "mailto: shivamkaushik14495@gmail.com" className='py-6 px-16 rounded-xl bg-blue-800 text-white text-2xl relative top-20 font-bold'>Contact Me</a>
    </div>
    </div>
    </div>
  );
}

export default Intro;

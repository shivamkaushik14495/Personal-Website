import './App.css';
import profile from "./image/image.png"

function App() {
  return (
    <div className="App">
    <nav className='bg-black h-16'>
      <ul className='flex float-right mx-10 mt-6 text-center'>
        <li><a href='#' className='pd mx-4 px-4 text-white'>Behance</a></li>
        <li><a href='#' className='pd mx-4 px-4 text-white'>Dribbble</a></li>
        <li><a href='#' className='pd mx-4 px-4 text-white'>Linkedin</a></li>
      </ul>
    </nav>
    <div className='body block mt-0 py-10 sm:grid text-left min-h-full grid-cols-2 justify-items-center items-center sm:mt-28'>
    <>
      <img src={profile} className= "2xl:max-w-xl xl:max-w-lg float-right lg:max-w-sm sm:max-w-xs"></img>
    </>
    <div className=' text-center sm:text-left'>
      <h3 className='heading text-4xl 2xl:text-8xl xl:text-7xl lg:text-5xl'>Hello! I'm</h3>
      <h2 className='name text-3xl font-bold text-4xl mt-3 2xl:text-8xl mt-4 xl:text-7xl mt-4 lg:text-5xl'>Shivam Kaushik</h2>
      <h4 className='name text-2xl mt-3 font-regular 4xl mt-2 2xl:text-6xl mt-7 xl:text-5xl mt-4 lg:text-4xl mt-3'> Designer🖥 and Developer👩‍💻</h4>
    </div>
    </div>
    </div>
  );
}

export default App;

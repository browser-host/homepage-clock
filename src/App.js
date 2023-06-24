import './App.css';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';
import { DiGoogleDrive} from 'react-icons/di';
import { FaCss3, FaDiscord, FaInstagram, FaGithub, FaBook, FaFigma } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import React, {useState, useEffect} from 'react'

// data for clock
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

// Bookmark data

const bookmarkData = [
  {
    'label':  'youtube',
    'link':   'https://www.youtube.com/',
    'icon':   AiFillYoutube
  },
  {
    'label':  'gmail',
    'link':   'https://mail.google.com/',
    'icon':   IoMdMail
  },
  {
    'label':  'gdrive',
    'link':   'https://drive.google.com/drive/u/0/my-drive',
    'icon':   DiGoogleDrive
  },
  {
    'label':  'ffe',
    'link':   'https://freefrontend.com/',
    'icon':   FaCss3
  },
  {
    'label':  'discord',
    'link':   'https://discord.com/channels/@me',
    'icon':   FaDiscord
  },
  {
    'label':  'github',
    'link':   'https://github.com/',
    'icon':   FaGithub
  },
  {
    'label':  'instagram',
    'link':   'https://www.instagram.com/',
    'icon':   FaInstagram
  },
  {
    'label':  'thesaurus',
    'link':   'https://www.thesaurus.com/',
    'icon':   FaBook
  },
  {
    'label':  'figma',
    'link':   'https://www.figma.com',
    'icon':   FaFigma
  },
];

const engines = {"google":"https://www.google.com/search?q=", "duckduckgo":"https://duckduckgo.com/?q=", "youtube":"https://www.youtube.com/results?q=", "scholar":"https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q="}

const Bookmark = ({icon: Component, label, link}) => {
  return (
    <>
     <div className=" relative flex flex-row items-center w-full py-0.5 ml-[22px] group-hover:ml-4 duration-300">
        <Component className="text-2xl  text-highlight "/>
        <a href={link} className="opacity-0 group-hover:opacity-100 absolute left-0 group-hover:left-12 text-xl w-[128px] text-light duration-300">{label}</a>
      </div>
    </>
  )
}

// checks for valid URL
const isWebUrl = value => {
  try {
    // attempt to make new url with the input
    // if this fails its not a url
    const url = new URL(value)
    // return a check to seet if the protocol is one of the two:
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}


// returns what to search
function getTargetUrl(value, engine){
  // check to see if input is already a valid URL
  if (isWebUrl(value)) return value
  // check for a custom shortform input
  // if (lookup[value]) return lookup[value]
  // else search it on engine -> google default
  return engines[engine] + value
}



function App() {
  // state

  // search engine
  const [engine, setEngine] = useState("google");

  // search input
  const [searchInput, setSearchInput] = useState("");

  // time value
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 500);
  }, []);


  // functions
  function engineClick(e){
    setEngine(e.target.value);
    handleSearch(e.target.value, e.ctrlKey ? true : false);
  }

  function engineSubmit(e){
    handleSearch(engine, e);
    e.preventDefault();
  }

  function searchCLick(e){
    handleSearch(engine, e);
  }

  function handleSearch(inputEngine, ctrlKey){
    // check for empty
    if ( !(searchInput === "" || searchInput == null) ){
      // get url
      const targetUrl = getTargetUrl(searchInput, inputEngine);

      // navigate to new search
      if(ctrlKey){
        window.open(targetUrl, "_blank")
      } else {
        window.open(targetUrl, "_self")
      }
    }
  }  

  // render
  return (
    <main className="h-full w-full bg-background">
      
      {/* middle stuff */}
      <div className=" w-[600px] xl:w-[766px] h-[80%] m-auto flex flex-col justify-center">

        {/* Clock */}
        <div className="flex">
          {/* Time */}
          <div className="text-8xl xl:text-9xl font-black flex-1">
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute top-0 -left-6 text-[#00000000] text-shadow text-stroke">{time.getHours()}</div>
            </div>
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute -top-8 left-20 text-[#00000000] text-shadow text-stroke">{time.getMinutes()}</div>
            </div>
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute -top-7 left-6 text-6xl text-[#00000000] text-shadow text-stroke">{time.getSeconds()}</div>
            </div>
          </div>

          {/* Date */}
          <div className="text-8xl xl:text-9xl font-black flex-1">
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute top-0 left-10 text-[#00000000] text-shadow text-stroke">{days[time.getDay()]}</div>
            </div>
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute top-0 text-6xl text-[#00000000] text-shadow text-stroke">{months[time.getMonth()]}</div>
            </div>
            <div className="relative">
              <div className="invisible inline-block">spacer</div>
              <div className="absolute -top-16 left-36 text-[#00000000] text-shadow text-stroke">{time.getDate()}</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form className="flex justify-center margin-auto px-6 py-4 mb-8 border-light border-4 border-solid rounded-full" onSubmit={engineSubmit}>
        {/* <form className="flex justify-center margin-auto px-6 py-4 mb-8 border-light border-4 border-solid rounded-full"> */}
          <input type="text" className="w-10/12 focus:outline-none bg-background text-2xl text-light" onChange={(e) => setSearchInput(e.target.value)}/>
          <AiOutlineSearch className="text-4xl w-1/6 text-highlight hover:cursor-pointer" onClick={searchCLick}></AiOutlineSearch>
        </form>
        <br/>

        {/* Search Options */}
        <div className="flex justify-around items-end" onChange={engineClick}>
          <input label="google"     value="google"      type="radio" name="search" className="before:content-[attr(label)] appearance-none cursor-pointer w-32 xl:w-40 px-1 py-2 text-center font-bold text-lg xl:text-2xl text-light border-light border-b-8 border-[3px] border-solid rounded-md duration-150 ease-[cubic-bezier(.17,1.76,.23,.92)] checked:bg-highlight checked:border-b-[3px]" defaultChecked/>
          <input label="duckduckgo" value="duckduckgo"  type="radio" name="search" className="before:content-[attr(label)] appearance-none cursor-pointer w-32 xl:w-40 px-1 py-2 text-center font-bold text-lg xl:text-2xl text-light border-light border-b-8 border-[3px] border-solid rounded-md duration-150 ease-[cubic-bezier(.17,1.76,.23,.92)] checked:bg-highlight checked:border-b-[3px]" />
          <input label="youtube"    value="youtube"     type="radio" name="search" className="before:content-[attr(label)] appearance-none cursor-pointer w-32 xl:w-40 px-1 py-2 text-center font-bold text-lg xl:text-2xl text-light border-light border-b-8 border-[3px] border-solid rounded-md duration-150 ease-[cubic-bezier(.17,1.76,.23,.92)] checked:bg-highlight checked:border-b-[3px]" />
          <input label="scholar"    value="scholar"     type="radio" name="search" className="before:content-[attr(label)] appearance-none cursor-pointer w-32 xl:w-40 px-1 py-2 text-center font-bold text-lg xl:text-2xl text-light border-light border-b-8 border-[3px] border-solid rounded-md duration-150 ease-[cubic-bezier(.17,1.76,.23,.92)] checked:bg-highlight checked:border-b-[3px]" />
        </div>
        <br/>
      </div>

      {/* sidebar */}
      <div className="group fixed top-0 left-0 w-24 h-screen py-5 pl-3 hover:w-48 duration-300">
        <div className="h-full rounded-md bg-dark flex flex-col p-2">
          {/* Bookmark title */}
          <div className="opacity-0 group-hover:opacity-100 text-2xl text-light text-center duration-300">bookmarks</div>

          {/* Bookmark list */}
          <div className="flex-1">
            {bookmarkData.map((bookmark) => 
              Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
            )}
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;

import './App.css';
import { AiOutlineSearch, AiFillYoutube } from 'react-icons/ai';
import { DiGoogleDrive} from 'react-icons/di';
import { FaCss3, FaDiscord, FaInstagram, FaGithub, FaBook, FaFigma } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdMail } from 'react-icons/io';
import React, {useState, useEffect} from 'react'

import porsche from './videos/porsche.gif';


// * * * * * * * * * * * * * * * 
// * *        Data           * * 
// * * * * * * * * * * * * * * * 

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



// * * * * * * * * * * * * * * * 
// * *      Functions        * * 
// * * * * * * * * * * * * * * * 

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

 

// * * * * * * * * * * * * * * * 
// * *      Components       * * 
// * * * * * * * * * * * * * * * 

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


function SideBar(){

  return (
    <>
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
    </>
  )

}


function SearchOptions(props){

  return(
    <>
      {/* Search Options */}
      <div className="flex justify-around items-end 2xl:w-[700px] 2xl:m-auto" onChange={props.onChangeFunction}>
        <input label="google"     value="google"      type="radio" name="search" class="search-button" defaultChecked/>
        <input label="duckduckgo" value="duckduckgo"  type="radio" name="search" class="search-button" />
        <input label="youtube"    value="youtube"     type="radio" name="search" class="search-button" />
        <input label="scholar"    value="scholar"     type="radio" name="search" class="search-button" />
      </div>
      <br/>
    </>
  )
}


function Clock(){
  // time value
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 500);
  }, []);

  return (
    <>
      {/* Clock */}
      <div className="flex w-[500px] 2xl:w-[900px] m-auto">
        {/* Time */}
        <div className="text-6xl 2xl:text-9xl font-black flex-1">
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
        <div className="text-6xl 2xl:text-9xl font-black flex-1">
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
    </>
  )
}


function SearchBar(props){
  return (
    <>
      {/* Search Bar */}
      <form className="flex justify-center w-[500px] 2xl:w-[900px] m-auto px-6 py-1 2xl:py-3 mb-8 border-light border-4 border-solid rounded-lg" onSubmit={props.engineSubmit}>
        <input type="text" className="w-10/12 focus:outline-none bg-background text-xl 2xl:text-3xl text-light" onChange={props.inputChange}/>
        <AiOutlineSearch className="text-4xl w-1/6 text-highlight hover:cursor-pointer" onClick={props.search}/>
      </form>
      <br/>
    </>
  )
}


function ThemeSwitcher(){
  return (
    <>
      <GiHamburgerMenu className="fixed top-5 left-5 hover:cursor-pointer text-xl 2xl:text-2xl text-light hover:text-2xl 2xl:hover:text-3xl duration-100"/>
    </>
  )
}


function BookmarkSection(){
  return(
    <>
      <div className="h-[800px] bg-background rounded-lg border-solid border-light border-4 border-b-8 overflow-hidden">
        <img src={porsche} alt="porsche vid" className=""/>
      </div>
    </>
  )
}



// * * * * * * * * * * * * * * * 
// * *       The App         * * 
// * * * * * * * * * * * * * * * 

function App() {
  // state

  // search engine
  const [engine, setEngine] = useState("google");

  // search input
  const [searchInput, setSearchInput] = useState("");

  // for updating search word in search bar
  function inputChange(e){
    setSearchInput(e.target.value);
  }

  // hanlder functions for search submission
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

  // opens up the desired search in current tab or new one
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
    <main className="h-full w-full bg-background flex align-center">
      <ThemeSwitcher/>

      <div className="w-full flex flex-row">
        {/* left stuff */}
        <div className="flex-1 2xl:flex-none flex ">
          <div className="bg-dark w-[500px] h-[400px] 2xl:h-[800px] 2xl:mx-20 m-auto align-center bg-background">
            <BookmarkSection/>
          </div>
        </div>
        
        {/* right stuff */}
        <div className="w-[500px] h-[600px] 2xl:h m-auto flex-1 flex flex-col justify-center">
          <Clock/>        
          <SearchBar engineSubmit={engineSubmit} search={searchCLick} inputChange={inputChange}/>
          <SearchOptions onChangeFunction={engineClick}/>
        </div>
      </div>

      


    </main>
  );
}

export default App;

import './App.css';
import { AiOutlineSearch, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { SiUpwork, SiNetflix } from 'react-icons/si';
import { DiGoogleDrive} from 'react-icons/di';
import { FaCss3, FaDiscord, FaInstagram, FaGithub, FaBook, FaFigma } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdMail } from 'react-icons/io';
import { RxNotionLogo } from 'react-icons/rx';
import React, {useState, useEffect, Component} from 'react'

import axios, * as others from 'axios';
// * * * * * * * * * * * * * * * 
// * *        Data           * * 
// * * * * * * * * * * * * * * * 

// data for clock
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

// Bookmark data

const enterBookmarks = [
  {
    'label':  'youtube',
    'link':   'https://www.youtube.com/',
    'icon':   AiFillYoutube
  },
  {
    'label':  'instagram',
    'link':   'https://www.instagram.com/',
    'icon':   FaInstagram
  },
  {
    'label':  'netflix',
    'link':   'https://www.netflix.com/ca/',
    'icon':   SiNetflix
  },
];

const socialsBookmarks = [
  {
    'label':  'discord',
    'link':   'https://discord.com/channels/@me',
    'icon':   FaDiscord
  },
  {
    'label':  'gmail',
    'link':   'https://mail.google.com/',
    'icon':   IoMdMail
  },
  {
    'label':  'LinkedIn',
    'link':   'https://www.linkedin.com/',
    'icon':   AiFillLinkedin
  },
];

const workBookmarks = [
  {
    'label':  'ffe',
    'link':   'https://freefrontend.com/',
    'icon':   FaCss3
  },
    {
    'label':  'figma',
    'link':   'https://www.figma.com',
    'icon':   FaFigma
  },
  {
    'label':  'github',
    'link':   'https://github.com/',
    'icon':   FaGithub
  },
  {
    'label':  'upwork',
    'link':   'https://www.upwork.com/',
    'icon':   SiUpwork
  },
];

const otherBookmarks = [
  {
    'label':  'gdrive',
    'link':   'https://drive.google.com/drive/u/0/my-drive',
    'icon':   DiGoogleDrive
  },
  {
    'label':  'thesaurus',
    'link':   'https://www.thesaurus.com/',
    'icon':   FaBook
  },
  {
    'label':  'notion',
    'link':   'https://www.notion.so/',
    'icon':   RxNotionLogo
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
     <div className="flex flex-row items-center w-full hover:cursor-pointer group">
        <Component className="text-2xl text-dark/75 group-hover:text-highlight"/>
        <a href={link} className="flex-1 pl-4 text-xl duration-300 text-dark/75 group-hover:text-highlight">{label}</a>
      </div>
    </>
  )
}


// function SideBar(){

//   return (
//     <>
//       {/* sidebar */}
//       <div className="group fixed top-0 left-0 w-24 h-screen py-5 pl-3 hover:w-48 duration-300">
//         <div className="h-full rounded-md bg-dark flex flex-col p-2">
//           {/* Bookmark title */}
//           <div className="opacity-0 group-hover:opacity-100 text-2xl text-light text-center duration-300">bookmarks</div>

//           {/* Bookmark list */}
//           <div className="flex-1">
//             {enterBookmarks.map((bookmark) => 
//               Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )

// }


function SearchOptions(props){

  return(
    <>
      {/* Search Options */}
      <div className="absolute inset-x-0 top-0 bg-dark" onChange={props.onChangeFunction}>
        <div className="w-[512px] flex justify-around items-end m-auto">
          <input label="google"     value="google"      type="radio" name="search" class="search-button-new" defaultChecked/>
          <input label="duckduckgo" value="duckduckgo"  type="radio" name="search" class="search-button-new" />
          <input label="youtube"    value="youtube"     type="radio" name="search" class="search-button-new" />
          <input label="scholar"    value="scholar"     type="radio" name="search" class="search-button-new" />
        </div>
      </div>
      {/* <br/> */}
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
      {/* Time */}
      <div className="text-6xl text-highlight font-black flex w-[365px] justify-between m-auto">
        <div className="">
          {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
        </div>
        <div>
          AM
        </div>
      </div>

      {/* Date */}
      <div className="text-center text-6xl font-black text-light">
        {days[time.getDay()]}-{months[time.getMonth()]}-{time.getDate()}
      </div>
    </>
  )
}


function SearchBar(props){
  return (
    <>
      {/* Search Bar */}
      <form className="absolute bottom-[-28px] inset-x-0 flex justify-center w-[500px] 2xl:w-[900px] bg-light drop-shadow-lg rounded-full m-auto flex" onSubmit={props.engineSubmit}>
        <div className="flex-1 py-2 pl-2  ">
          <input type="text" className="w-full focus:outline-none bg-light text-xl 2xl:text-3xl text-dark rounded-full" onChange={props.inputChange}/>
        </div>
        <div className="bg-dark w-[100px] hover:cursor-pointer rounded-r-full flex flex-col justify-center border-1 border-solid border-dark">
          <AiOutlineSearch className="text-4xl text-highlight hover:cursor-pointer m-auto" onClick={props.search}/>
        </div>
      </form>
      {/* <br/> */}
    </>
  )
}


function ThemeSwitcher(){
  return (
    <>
      <GiHamburgerMenu className="fixed top-[16px] left-5 z-10 hover:cursor-pointer text-xl 2xl:text-2xl text-light hover:text-2xl 2xl:hover:text-3xl duration-100"/>
    </>
  )
}


class Weather extends Component {
  state = {
    condition: 'nothing',
    currentTemp: 'none',
    city: 'the middle of nowhere',
    province: 'nowhere'
  }

  fetchWeatherData(){
    // fetch data
    axios.get('http://api.weatherapi.com/v1/current.json?key=f8ad710fe87e48d1a8283741231207 &q=guelph&aqi=no')
      .then(function (response) {
        // handle success
        console.log(response);
        this.setState({
          condition: response.data.current.condition.text,
          currentTemp: response.data.current.temp_c,
          city: response.data.location.name,
          province: response.data.location.region,
        })
      }.bind(this))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  componentDidMount(){
    this.fetchWeatherData();
  }

  render(){
    // decompose state
    const {condition, currentTemp, city, province} = this.state;

    return (
      <>
        <div className="text-light opacity-70 text-xl mt-2">
          Currently, it is <span className="lowercase">{condition}</span> at a temp of {currentTemp} °C in {city}, {province}.
        </div>
      </>
    )
  }
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

      <div className="w-full flex flex-col flex flex-col">

        {/* upper */}
        <div className="h-2/3 w-full flex flex-col justify-around relative bg-cover bg-center" id="asdf">

          <SearchOptions onChangeFunction={engineClick}/>

          {/* clock */}
          <div className="text-center flex flex-col">
            <Clock/>
            <Weather/>
          </div>

          <SearchBar engineSubmit={engineSubmit} search={searchCLick} inputChange={inputChange}/>
        </div>
        
        {/* lower */}
        <div className="h-1/3 bg-light pt-12 flex justify-around text-dark">
          <div className="text-2xl font-semibold">
            entertainment
            <div className="flex flex-col font-normal text-lg">
              {/* Bookmark list */}
              {enterBookmarks.map((bookmark) => 
                Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
              )}
            </div>
          </div>
          <div className="text-2xl font-semibold">
            socials
            <div className="flex flex-col font-normal text-lg">
              {/* Bookmark list */}
              {socialsBookmarks.map((bookmark) => 
                Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
              )}
            </div>
          </div>
          <div className="text-2xl font-semibold">
            work
            <div className="flex flex-col font-normal text-lg">
              {/* Bookmark list */}
              {workBookmarks.map((bookmark) => 
                Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
              )}
            </div>
          </div>
          <div className="text-2xl font-semibold">
            other
            <div className="flex flex-col font-normal text-lg">
              {/* Bookmark list */}
              {otherBookmarks.map((bookmark) => 
                Bookmark({icon: bookmark.icon, label: bookmark.label, link: bookmark.link})
              )}
            </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}

export default App;

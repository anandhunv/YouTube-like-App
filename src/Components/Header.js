import '@fortawesome/fontawesome-free/css/all.css';
import { Logo, YOUTUBE_SEARCH_API } from '../utils/constants';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cacheResults } from '../utils/searchSlice';
import { addResult, toggleShow, toggleSide } from '../utils/displaySlice';
import useSearch from '../Hooks/useSearch';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector(store => store.search);
  const show = useSelector(store => store.display.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestion(json[1]);

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useSearch();

  const handleClick = value => {
    setSearchQuery(value);
    dispatch(addResult(value));
    dispatch(cacheResults({ [value]: [] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== '') {
      handleClick(searchQuery);
    } else {
      console.log('Please enter a valid search query.');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className='md:p-4 md:mb-0 mb-4 md:grid md:grid-flow-col flex flex-col md:mt-0'>
      <div className='left md:flex md:col-span-2 flex md:flex-row flex-row-reverse p-3 md:p-0 justify-between md:justify-normal'>
        <i className='fa-solid fa-bars md:text-[20px] md:mr-8 text-white cursor-pointer' onClick={toggleMenuHandler}></i>
        <Link to='/'>
          <img src={Logo} className='md:h-6 h-5' alt='Logo' />
        </Link>
      </div>

      <div className='middle bg-neutral-600 md:flex flex md:mx-0 mx-3 md:items-start rounded-2xl md:h-[45px] mt-4 md:mt-0 md:col-span-6 col-span-6 h-[40px] md:justify-end'>
        <input
          type='text'
          placeholder='Search'
          className='md:w-full w-full md:h-[45px] outline-none border border-neutral-700 rounded-l-2xl bg-black text-slate-100 px-3 md:px-5'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => {
            setShowSuggestion(false);
            dispatch(toggleShow(!show));
          }}
        />
        <div className='absolute md:mr-14 ml-64 mt-1 md:text-2xl font-extralight'>{searchQuery && <h1 className='cursor-pointer px-1 hover:border border-zinc-900' onClick={handleClearSearch}>X</h1>}</div>
        <Link to={'/search?' + searchQuery}>
          <button className='p-3 flex items-center bg-neutral-700 rounded-r-2xl' onClick={handleSearchButtonClick}>
            <i className='fa-solid fa-magnifying-glass text-sm md:text-[21px] text-gray-200 font-extralight'></i>
          </button>
        </Link>
      </div>

      <div className='fixed flex rounded-b-none bg-black md:w-[650px] md:h-auto w-screen md:p-0 p-5 md:mx-72 rounded-lg md:pt-3 mt-[100px] md:mt-[47px]'>
        <ul className='text-gray-50 flex flex-col w-full'>
          {suggestion.map((s, key) => (
            <Link to={'/search?' + searchQuery} key={key}>
              <li onClick={() => handleClick(s)} className='mb-3 hover:bg-neutral-600 md:p-1 p-1 cursor-pointer'>
                <i className='fa-solid fa-magnifying-glass mr-5'></i>
                {s}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='right md:flex md:col-span-2 md:px-5 md:justify-end md:relative flex md:ml-0 ml-[300px] md:mt-0 mt-3 absolute'>
        <Link to='/creditional'>
          <div className='md:flex flex md:rounded-3xl md:border md:border-solid md:border-neutral-700 md:p-2 md:justify-center md:items-center'>
            <i className='fa-regular fa-circle-user text-sky-500 text-[18px] md:text-[25px]'></i>
            <h1 className='text-cyan-600 md:text-base text-[0px] md:ml-4'>Sign-In</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

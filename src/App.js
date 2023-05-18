import React ,{useState,useEffect} from 'react';
import { TVShowAPI } from './api/tv-show';
import s from './style.module.css'
import { BACKDROP_BASE_URL } from './config';
import { TVShowDetails } from './components/TVShowDetail/TVShowDetails';
import LogoImg from './assets/images/logo.png'
import {Logo} from './components/Logo/logo'
import { TVShowList } from './components/TVShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

export function App() {
  const[currentTVShow , setCurrentTVShow] = useState();
  const[recommendations, setRecommendation] = useState();

  async function fetchPopulars(){
    try{
      const popularTVShowList= await TVShowAPI.fetchPopulars()
      if(popularTVShowList.length>0){
        setCurrentTVShow(popularTVShowList[0])
      }
    }catch(error){
      alert(error);
    }
  };

  async function fetchRecommendations(tvShowId){
    try{
      const recommendedShowList= await TVShowAPI.fetchRecommendations(tvShowId)
      if(recommendedShowList.length>0){
        setRecommendation(recommendedShowList.slice(0,10))
      }
    }catch(error){
    }
  };

  async function fetchByTitle(title){
    try{
      const searchresponse= await TVShowAPI.fetchByTitle(title)
      if(searchresponse.length>0){
        setCurrentTVShow(searchresponse[0])
      }
  }catch(error){
  }
  };

  const updateTvShow = (tvShow) =>{
    setCurrentTVShow(tvShow);
  };

  useEffect(() => {
  fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTVShow){
    fetchRecommendations(currentTVShow.id);
    }
    }, [currentTVShow]);

  return (
    <div className={s.main_container}
    style={{
      background: currentTVShow
        ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
        : "black",
    }}>
      <div className={s.header}>
        <div className='row'>
          <div className='col-4'>
              <Logo LogoImg={LogoImg} title='Watowatch' subtitle='Find a show you may like'/>
          </div>
          <div className='col-md-12 col-lg-4'>
           <SearchBar onSubmit={fetchByTitle}/>
          </div>
        </div>
      </div>
      <div className={s.movieDetails}>
       {currentTVShow && <TVShowDetails tvShow={currentTVShow}/>}
      </div>
      <div className={s.recommendedMovie}>
        {currentTVShow && <TVShowList onClickItem={updateTvShow} tvShowList={recommendations} />}
      </div>
    </div>
  );
}

export default App;

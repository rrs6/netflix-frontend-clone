import React, { useEffect, useState } from 'react';
import './App.css';
import ApiRequest from './ApiRequest';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [black, setBlack] = useState(false);
  useEffect( () => {
    const load = async () => {
      let list = await ApiRequest.getList();
      setMovieList(list);
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await ApiRequest.getMediaInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    }
    load();
  }, [])
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY >= 12){
        setBlack(true);
      }else{
        setBlack(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return (() => {
      window.removeEventListener('scroll', scrollListener);
    })
  }, [])

  return (
    <div className='homepage'>
      <Header black={black}/>
      {featuredData&&<FeaturedMovie item={featuredData}/>}
      <section className='list'>
        {movieList.map((item, key) => (
          <MovieRow category={item.title} key={key} items={item.items}/>
        ))}
      </section>
      <Footer/>
      {movieList.length <= 0&&<div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading-gif"/>
        </div>}
    </div>
  );
}

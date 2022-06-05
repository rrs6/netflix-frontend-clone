import {React, useState} from 'react';
import './MovieRow.css';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
export default ({category, items}) => {
    const [posX, setPosX] = useState(0);
    const handleMovieRowLeft = () => {
        let x = posX + (window.innerWidth * 0.5);
        if(x>0){
            x=0;
        }
        setPosX(x);
        console.log(posX);
    };
    const handleMovieRowRight = () => {
        let x = posX - Math.round(window.innerWidth * 0.5);
        let width = items.results.length*150;
        if(posX < window.innerWidth-width){
            x = (window.innerWidth-width)-60;
        }
        setPosX(x);
    };
    return (
        <div className="movieRow">
            <h2>{category}</h2>
            <div className='movieRow--left' onClick={handleMovieRowLeft}>
                <MdNavigateBefore style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleMovieRowRight}>
                <MdNavigateNext style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    width: items.results.length * 150,
                    marginLeft: posX
                }}>
                    {items.results.length>0&&items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
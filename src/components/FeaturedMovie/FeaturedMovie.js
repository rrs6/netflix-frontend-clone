import "./FeaturedMovie.css";
import React from "react";
export default ({item}) => {
    let data = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    let sinopse = item.overview;
    if(sinopse.length > 200){
        sinopse = sinopse.substring(0, 200)+"...";
    }
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"><p>{item.original_name}</p></div>
                    <div className="featured--info">
                        {console.log(item)}
                        <p className="featured--points">{item.vote_average} pontos</p>
                        <p className="featured--year">{data.getFullYear()}</p>
                        <p className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons>1?'s':''}</p>
                        <p className="featured--description">{sinopse}</p>
                    </div>
                    <div className="featured--buttonarea">
                        <a className="featured--watchbutton" href={`/watch/${item.id}`}>▶ Assistir</a>
                        <a className="featured--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    );
}
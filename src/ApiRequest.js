const API_KEY = '6a7d1ce556babd04b1f04979747304b7';
const BASE_PATH = 'https://api.themoviedb.org/3';
const fetchUrl = async (url) => {
    const request = await fetch(`${BASE_PATH}${url}`);
    const jsonResponse = await request.json();
    return jsonResponse;
}
export default {
    getList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await fetchUrl(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await fetchUrl(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await fetchUrl(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await fetchUrl(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await fetchUrl(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await fetchUrl(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await fetchUrl(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await fetchUrl(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getMediaInfo: async (mediaId, type) => {
        let info = {};
        if(mediaId){
            if(type==="movie"){
                info = await fetchUrl(`/movie/${mediaId}?language=pt-BR&api_key=${API_KEY}`)
            }else if(type==="tv"){
                info = await fetchUrl(`/tv/${mediaId}?language=pt-BR&api_key=${API_KEY}`)
            }
        }
        return info;
    }
}
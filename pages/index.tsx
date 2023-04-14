import Banner from '../components/Banner'
import Header from '../components/Header'
import requests from '../utils/requests'
import { Movie} from '../typing'
import Row from '../components/Row'
interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  // products: Product[]
  error:Object
}
const Home = ({trendingNow,
  netflixOriginals,
  topRated,
  actionMovies
  ,comedyMovies
  ,horrorMovies
  ,romanceMovies
  ,documentaries,error}:Props) => {

    if(error){
   
      return <div className='h-screen'>ServerError</div>
    }
  return (
    <div className=" bg-gradient-to-b  from-gray-900/10 to-[#010511] h-screen">
     <Header/>
     <main className="relative  pb-24 lg:space-y-24 pl-4 lg:pl-16    ">
        <Banner netflixOriginals={netflixOriginals}/>
         <section className='flex flex-col gap-8'>
<Row title='Trending Now' movies={trendingNow}/>
<Row title='Top Rated' movies={topRated}/>
<Row title='Action Thrillers' movies={actionMovies}/>
<Row title='Comedy Movies' movies={comedyMovies}/>
<Row title='Horror Movies' movies={horrorMovies}/>
<Row title='Romantic Movies' movies={romanceMovies}/>
<Row title='Documentaries' movies={documentaries}/>

         </section>
     </main>
    {/* modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  try {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);

    return {
      props: {
        netflixOriginals: netflixOriginals?.results,
        trendingNow: trendingNow?.results,
        topRated: topRated?.results,
        actionMovies: actionMovies?.results,
        comedyMovies: comedyMovies?.results,
        horrorMovies: horrorMovies?.results,
        romanceMovies: romanceMovies?.results,
        documentaries: documentaries?.results,
      },
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
      },
    };
  }
  
}
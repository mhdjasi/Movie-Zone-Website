import React from 'react';
import requests from '../request'
import Row from '../components/Row';
import Banner from '../components/Banner';
import Footer from '../components/Footer';



function Home() {

    

  return (
    <div className='home'>
      
      <Banner fetchUrl1={requests.fetchNetflixOriginals}/>


          <Row title="NetflixOriginals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now"
      fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
      <Row title="Action"
      fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy"
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Horror"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row title="Romance"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />

<Footer/>
</div>
  )
}

export default Home
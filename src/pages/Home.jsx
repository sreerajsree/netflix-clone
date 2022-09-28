import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <>
      <Main />
      <Row rowID='1' title='UpComing' fetchURl={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURl={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchURl={requests.requestTrending} />
      <Row rowID='4' title='Top Rated' fetchURl={requests.requestTopRated} />
      <Row rowID='5' title='Horror' fetchURl={requests.requestHorror} />
    </>
  )
}

export default Home
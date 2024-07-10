import React from 'react'
import { useQuery } from 'react-query'
import SimpleSpinner from '../components/Loader/SimpleSpinner'
import Tweet from '../components/Tweet/Tweet'
import { getRandomTweets } from '../services/tweetService'

export default function ExploreTrending() {
  const {isLoading,data,error} = useQuery('trending-tweets',getRandomTweets)
  
  return (
    <>
      {isLoading && <SimpleSpinner topCenter/>}
      {error && <p className='error error-text'>{error}</p>}
      {data && data.map(tweet => <Tweet tweet={tweet} key={tweet._id}/>)}
    </>
  )
}

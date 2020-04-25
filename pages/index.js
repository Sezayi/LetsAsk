import React from 'react'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AskQuestion from '../components/AskQuestion'
import HashtagFilter from '../components/HashtagFilter'
import QuestionsList from '../components/QuestionsList'


const Home = () => (
	<>
		<NavBar />
		<Hero />
		<AskQuestion />
		<HashtagFilter />
		<QuestionsList />
	</>
)

export default Home

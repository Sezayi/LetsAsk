import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import '../tailwind.css'

  

class _App extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<div>
				<Head>
					<link
						href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
						rel='stylesheet'
					/>
					<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
					<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
				</Head>

				<Component {...pageProps} />
			</div>
		)
	}
}

export default _App

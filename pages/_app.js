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
					<link href="//db.onlinewebfonts.com/c/831e1041c97169ac1d4dc3d161b235cc?family=Burbank+Big+Condensed" rel="stylesheet" type="text/css"/>
				</Head>

				<Component {...pageProps} />
			</div>
		)
	}
}

export default _App

import * as React from 'react'
import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'

import { cache } from 'emotion'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CacheProvider value={cache}>
         <style jsx global>{
            `
            @font-face {
                font-family: open sans;
                src: url(./static/OpenSans-Regular.ttf);
            }
            
            body { 
              margin:0; 
              padding:0; 
              font-family: open sans;
            }
            `
        }</style>
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}

import '../styles/globals.css'


try {
  // inspect pop state
  window.addEventListener('popstate', (event) => {
    console.log('pop', event)
  })
  // inspect replaceState
  let _replaceState = history.replaceState
  history.replaceState = function() { console.log("replace", arguments); _replaceState.apply(history, arguments) }
  // inspect pushState
  let _pushState= history.pushState
  history.pushState = function() { console.log("push", arguments); _pushState.apply(history, arguments) }
} catch (err) {}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

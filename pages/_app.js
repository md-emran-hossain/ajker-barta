<<<<<<< HEAD
import AuthProvider from '../context/AuthProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
=======
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
>>>>>>> 1d04a03baa4931cd33baceb2acc1b6476328fead
}

export default MyApp

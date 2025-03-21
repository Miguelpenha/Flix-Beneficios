import Head from '../components/Head'
import Header from '../components/Header'
import { Container } from '../styles/pages'
import Initial from '../components/Initial'
import Showcases from '../components/Showcases'
import Features from '../components/Features'
import About from '../components/About'
import App from '../components/App'
import Card from '../components/Card'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return <>
        <Head/>
        <Header/>
        <Container>
            <Initial/>
            <Features/>
            <About/>
            <Showcases/>
            <App/>
            <Card/>
            <Contact/>
        </Container>
        <Footer/>
    </>
}

export default Home
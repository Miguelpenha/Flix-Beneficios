import HeadRaw from 'next/head'
// import GoogleTagManager from './GoogleTagManager'

function Head() {
    return (
        <>
            <HeadRaw>
                <title>Flix Benefícios</title>
                <meta name="description" content="Sua empresa pensando no seu bem-estar"/>
                <meta property="og:title" content="Flix Benefícios"/>
                <meta property="og:description" content="Sua empresa pensando no seu bem-estar"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
                <meta property="og:image" content={process.env.NEXT_PUBLIC_DOMAIN+'/img/thumbnail.png'}/>
                <meta name="author" content="Flix Benefícios"/>
                <meta name="keywords" content=""/>
            </HeadRaw>
            {/* <GoogleTagManager/> */}
        </>
    )
}

export default Head
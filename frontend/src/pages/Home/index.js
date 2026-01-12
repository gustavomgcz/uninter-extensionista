import Banner from 'components/Banner'
import News from 'components/News'
import AboutUsSection from 'components/AboutUsSection'
import ActionsSection from 'components/ActionsSection'

function Home() {
    return (
        <>
            <Banner />
            <main>
                <ActionsSection />
                {/* <News /> */}
                <AboutUsSection />
            </main>
        </>
    )
}

export default Home
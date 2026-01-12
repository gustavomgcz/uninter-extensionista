import Banner from 'components/Banner'
import AboutUsSection from 'components/AboutUsSection'
import ActionsSection from 'components/ActionsSection'

function Home() {
    return (
        <>
            <Banner />
            <main>
                <ActionsSection />
                <AboutUsSection />
            </main>
        </>
    )
}

export default Home

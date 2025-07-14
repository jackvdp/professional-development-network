import {NextPage} from 'next';
import {Fragment} from 'react';
// -------- custom component -------- //
import {Navbar} from 'components/blocks/navbar';
import {Footer} from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import CTA from 'components/blocks/call-to-action/CTA';
import HomeHeader from 'components/blocks/home/HomeHeader';
import HomeEventsSidebar from 'components/blocks/events/EventsSidebar';
import HomeAbout from 'components/blocks/home/HomeAbout';
import HomeArticles from 'components/blocks/home/HomeArticles';
import Features from 'components/blocks/features/features';
import {useAuth} from 'auth/useAuth';
import CustomHead from "../src/components/common/CustomHead";

const Home: NextPage = () => {

    const {isLoggedIn} = useAuth();

    return (
        <Fragment>
            <CustomHead
                title="Home"
                description="Professional Development Network - A global community connecting public service professionals to share knowledge, best practices, and foster collaboration in professional development."
            />
            <PageProgress/>

            <Navbar barSitsOnTop={true}/>

            <main className="content-wrapper">
                <HomeHeader/>

                <div className="container py-5 py-md-10">

                    <div className="row gx-lg-8 gx-xl-12">
                        <div className="col-md-8">
                            <HomeAbout/>
                        </div>
                        <div className="col-md-4">
                            <HomeEventsSidebar/>
                        </div>
                    </div>

                </div>

                <HomeArticles/>

                <div className='pb-5 pb-md-10'>
                    <Features/>
                </div>

                {!isLoggedIn && <CTA/>}

            </main>

            <Footer/>
        </Fragment>
    );
};

export default Home;
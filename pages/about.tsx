import About from 'components/blocks/about/About';
import type {NextPage} from 'next';
import {Fragment} from 'react';
import {Navbar} from 'components/blocks/navbar'
import {Footer} from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import CustomHead from "../src/components/common/CustomHead";

const AboutPage: NextPage = () => {
    return (
        <Fragment>
            <CustomHead
                title="About"
                description="Learn about the Professional Development Network, our mission to enhance public service careers through professional networking, knowledge sharing, and continuous learning opportunities."
            />
            <PageProgress/>

            <Navbar/>

            <About/>

            <Footer/>
        </Fragment>

    );
}

export default AboutPage;
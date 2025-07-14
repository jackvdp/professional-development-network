import {NextPage} from 'next';
import {Fragment, useEffect} from 'react';
import {Navbar} from 'components/blocks/navbar';
import {Footer} from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import Register from 'components/blocks/register/Register';
import {useRouter} from 'next/router';
import {useAuth} from 'auth/useAuth';
import CustomHead from "../src/components/common/CustomHead";

const RegisterPage: NextPage = () => {

    const router = useRouter();
    const {isLoggedIn} = useAuth()

    useEffect(() => {
        if (isLoggedIn) {
            // Get the referrer from query parameter or default to account page
            const { redirect } = router.query;
            // Only use redirect if it's defined and not the home page
            if (typeof redirect === 'string' && redirect !== '/' && redirect !== '') {
                router.push(redirect);
            } else {
                // Default to account page
                router.push('/account');
            }
        }
    }, [isLoggedIn, router.query]);

    return (
        <Fragment>
            <CustomHead
                title="Register"
                description="Join the Professional Development Network. Create an account to connect with public service professionals, access exclusive resources, and advance your career."
            />
            <PageProgress/>

            <Navbar/>

            <main className="content-wrapper bg-gray">

                <div className="container py-14 py-md-16">
                    <Register/>
                </div>

            </main>

            {/* ========== footer section ========== */}
            <Footer/>
        </Fragment>
    );
};

export default RegisterPage;

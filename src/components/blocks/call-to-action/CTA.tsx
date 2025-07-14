import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import RegisterLink from 'components/reuseable/links/RegisterLink';

const CTA: FC = () => {
    return (
        <section
            className="wrapper image-wrapper bg-auto no-overlay bg-image text-center mb-14 mt-14 mt-md-0 bg-map"
            style={{ backgroundImage: 'url(/img/illustrations/map.png)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="py-md-18 col-lg-6 mx-auto">
                        <h2 className="display-4 mb-3 text-center">Not already a member? Join Now.</h2>

                        <p className="lead mb-5 px-md-16 px-lg-3">
                            Get regular updates about upcoming webinars, new articles and connect with public service colleagues across the globe.
                        </p>

                        <RegisterLink title="Register" className="btn btn-lg btn-primary rounded-pill mx-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
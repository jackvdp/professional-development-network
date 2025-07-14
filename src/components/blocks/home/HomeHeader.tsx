import React from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import RegisterLink from 'components/reuseable/links/RegisterLink';
import {useAuth} from "auth/useAuth";
import styles from './Home.module.css';
import Image from 'next/image';

const HomeHeader = () => {
    const {isLoggedIn} = useAuth();

    return (
        <section className="wrapper bg-light">
            <div className="container pt-19 pt-md-21 pb-18 pb-md-20">
                <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
                    <div className="col-xl-6">
                        <h1 className="display-1 text-dark mb-4">Professional Development Members' Network</h1>
                        <p className="lead fs-lg text-dark mb-6">
                            <strong>Elevate your public service career — enhance skills, connect, and unlock opportunities.</strong>
                        </p>
                        <p className="text-dark mb-7">
                            We understand the importance of continuously learning and growing in your career, which is why we've created a platform for professionals, working in public service, to connect, collaborate, and share knowledge. Our goal is to provide you with the tools and resources you need to excel in your field and reach your full potential.
                        </p>

                        {!isLoggedIn && (
                            <div className="d-flex gap-3 flex-wrap">
                                <NextLink
                                    title="Explore Articles"
                                    href="/articles"
                                    className="btn btn-lg btn-primary rounded"
                                />
                                <NextLink
                                    title="View Events"
                                    href="/events"
                                    className="btn btn-lg btn-outline-primary rounded"
                                />
                            </div>
                        )}

                        {isLoggedIn && (
                            <div className="d-flex gap-3 flex-wrap">
                                <NextLink
                                    title="Explore Articles"
                                    href="/articles"
                                    className="btn btn-lg btn-primary rounded"
                                />
                                <NextLink
                                    title="View Events"
                                    href="/events"
                                    className="btn btn-lg btn-outline-primary rounded"
                                />
                            </div>
                        )}

                        {!isLoggedIn && (
                            <p className="lead fs-md py-4 text-dark">
                                Already a member?{' '}
                                <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-signin"
                                    className="hover more link-primary"
                                >
                                    Sign in
                                </a>
                            </p>
                        )}
                    </div>

                    <div className="col-xl-5 offset-xl-1 position-relative">
                        <div
                            className="shape rounded-circle bg-line primary rellax w-18 h-18"
                            style={{ top: '-2rem', right: '-1.9rem' }}
                        />

                        <div
                            className="shape rounded bg-soft-primary rellax d-md-block"
                            style={{ width: '85%', height: '90%', left: '-1.5rem', bottom: '-1.8rem' }}
                        />

                        <figure className="rounded">
                            <Image
                                src="/img/photos/unitednations.jpeg"
                                alt="Professional Development Network"
                                width={500}
                                height={400}
                                className="rounded"
                            />
                        </figure>
                    </div>
                </div>
                
                {/* Scroll prompt */}
                <div className="row">
                    <div className="col-12 text-center mt-8 mt-md-10">
                        <div className="scroll-indicator">
                            <p className="text-dark mb-2 fs-md">Scroll to learn more</p>
                            <div className="scroll-arrow animate-bounce">
                                <i className="uil uil-angle-down fs-lg text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;
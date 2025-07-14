// pages/events/[id].tsx
import {GetServerSideProps, NextPage} from 'next';
import {IEvent} from 'backend/models/event';
import Event from 'backend/models/event';
import React, {Fragment, useEffect, useState} from 'react';
import PageProgress from 'components/common/PageProgress';
import {Navbar} from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';
import {Footer} from 'components/blocks/footer';
import formatEventDates from 'helpers/formatEventDates';
import ReactMarkdown from 'react-markdown';
import EventsSidebar from 'components/blocks/events/EventsSidebar';
import CustomHead from 'components/common/CustomHead';
import {useAuth} from 'auth/useAuth';
import CTA from "components/blocks/call-to-action/CTA";
import Link from "next/link";
import {createMutableUserData} from "backend/models/user";
import {createBookingAPI} from "backend/use_cases/bookings/api/createBooking+SendConfirmation";
import {IBooking} from "backend/models/booking";
import {createClient} from "backend/supabase/server-props";
import {getUserBookings} from "backend/use_cases/bookings/getUserBookings";
import {useRouter} from "next/router";
import dbConnect from 'backend/mongo';

interface EventPageProps {
    event: IEvent;
    userBooking?: IBooking;
    isLoggedIn: boolean;
}

const EventPage: NextPage<EventPageProps> = ({event, userBooking, isLoggedIn: initialLoggedInState}) => {
    const {isLoggedIn, currentUser} = useAuth();
    const [signupStatus, setSignupStatus] = useState<null | 'success' | 'failed'>(null);
    const [booking, setBooking] = useState<IBooking | undefined>(undefined);

    const router = useRouter();
    const { responseStatus, response, message } = router.query;
    const [showResponseMessage, setShowResponseMessage] = useState(false);
    const [hasReloaded, setHasReloaded] = useState(false);

    useEffect(() => {
        if (userBooking?.eventId === event._id) {
            setBooking(userBooking);
        } else {
            setBooking(undefined);
        }
    }, [userBooking, event._id]);

    useEffect(() => {
        if (isLoggedIn && !initialLoggedInState && !hasReloaded) {
            setHasReloaded(true);
            router.replace(router.asPath);
        }
    }, [isLoggedIn, initialLoggedInState, hasReloaded, router]);

    useEffect(() => {
        if (responseStatus) {
            setShowResponseMessage(true);
        }
    }, [responseStatus, router, event._id]);

    const handleSignup = async () => {
        if (!isLoggedIn || !currentUser) return;

        try {
            const result = await createBookingAPI({
                user: createMutableUserData(currentUser),
                event
            });

            if (result) {
                setSignupStatus('success');
                setBooking(result);
            } else {
                setSignupStatus('failed');
            }
        } catch (error) {
            setSignupStatus('failed');
        }
    };

    // Helper to render the sign-up section
    const renderSignupSection = () => {
        if (new Date(event.endDate) < new Date()) return <p className="text-muted mt-2">Event has passed.</p>;

        if (!isLoggedIn || !currentUser) {
            return <button
                data-bs-toggle="modal"
                data-bs-target="#modal-signin"
                className="btn btn-soft-primary mt-4">
                Login to Sign Up for Event
            </button>
        }
        if (booking) {
            return <p className="text-success mt-2">You are signed up for this event! Go to <Link
                href="/account" className={"hover"}>account</Link> page for more details.</p>;
        }
        return (
            <>
                <button onClick={handleSignup} className="btn btn-primary mt-4">
                    Register for Event
                </button>
                {signupStatus === 'failed' && (
                    <p className="text-danger mt-2">There was a problem signing you up.</p>
                )}
            </>
        );
    };

    // Helper to render the speakers section
    const renderSpeakersSection = () => {
        if (!event.speakers || event.speakers.length === 0) return null;

        return (
            <div className="speakers-section mb-5">
                <h3 className="h2 mb-4">Speakers</h3>
                <div className="row">
                    {event.speakers.map((speaker, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="">
                                <div className="d-flex">
                                    {speaker.imageURL && (
                                        <div className="me-4">
                                            <img
                                                src={speaker.imageURL}
                                                alt={speaker.name}
                                                className="rounded-circle"
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="card-title mb-1">{speaker.name}</h4>
                                        <p className="card-text">{speaker.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderResponseMessage = () => {
        if (!showResponseMessage) return null;

        if (responseStatus === 'success') {
            return (
                <div className={`alert ${response === 'accepted' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong>Thank you.</strong> You have {response === 'accepted' ? 'accepted' : 'declined'} the invitation to this event.
                    {response === 'accepted' && ' We look forward to seeing you!'}

                    {/* Add sign-in prompt if user is not logged in */}
                    {!isLoggedIn && (response === 'accepted') && (
                        <>
                            <p className="mt-2 mb-2">
                                Please sign in to see event details, agenda and joining instructions.
                            </p>
                                <button
                                    className="btn btn-sm btn-outline-green"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-signin">
                                    Sign In
                                </button>
                        </>
                    )}
                </div>
            );
        }

        if (responseStatus === 'error') {
            return (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong>Error!</strong> {message || 'There was a problem processing your response.'}

                    {/* Add sign-in prompt for error cases too */}
                    {!isLoggedIn && (
                        <p className="mt-2 mb-0">
                            Please try again later or{' '}
                            <button
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#modal-signin">
                                sign in
                            </button>
                            <span className="ms-2">to manage your invitations.</span>
                        </p>
                    )}
                </div>
            );
        }

        return null;
    };

    return (
        <Fragment>
            <CustomHead title={event.title} description={event.description}/>
            <PageProgress/>
            <Navbar/>

            <main className="content-wrapper">
                {/* ========== title section ========== */}
                <section className="wrapper bg-soft-primary">
                    <div className="container pt-8 pb-8 pt-md-12 pb-md-12 text-center">
                        <div className="row">
                            <div className="col-md-10 col-xl-8 mx-auto">
                                <div className="post-header">
                                    <div className="post-category text-line">
                                        <NextLink href="#" className="hover" title={event.location}/>
                                    </div>
                                    <h1 className="display-1 mb-4">{event.title}</h1>
                                    <ul className="post-meta mb-5">
                                        <li className="post-date">
                                            <i className="uil uil-calendar-alt"/>
                                            <span>{formatEventDates(event.startDate, event.endDate)}</span>
                                        </li>
                                    </ul>
                                    {renderResponseMessage()}
                                    {renderSignupSection()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== details section ========== */}
                <section className="wrapper bg-light">
                    <div className="container py-6 py-md-8">
                        <div className="row gx-8 gx-xl-12">
                            <div className="col-md-8 mx-auto">
                                {/* Speakers section */}
                                {renderSpeakersSection()}

                                {/* Event description */}
                                <ReactMarkdown>{event.description}</ReactMarkdown>

                                {/* Sign-up section at the bottom of the event details */}
                                {renderSignupSection()}
                            </div>
                            <div className="col-md-4 mx-auto">
                                <EventsSidebar/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {!isLoggedIn && <CTA/>}

            <Footer/>
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params as { id: string };

    try {
        // Connect to database directly (like articles page)
        await dbConnect();
        
        // Find event by ID
        const event = await Event.findById(id).lean();
        
        if (!event) {
            return {
                notFound: true
            };
        }

        // Check if the user is logged in and has a booking for this event
        const supabase = createClient(context);
        const {data: {user}} = await supabase.auth.getUser();
        let usrBooking: IBooking | undefined;
        let isLoggedIn = false;

        if (user) {
            isLoggedIn = true;
            const {bookings} = await getUserBookings({userId: user.id});
            usrBooking = bookings.find(booking => booking.eventId === id);
        }

        return {
            props: {
                event: JSON.parse(JSON.stringify(event)),
                userBooking: usrBooking ? JSON.parse(JSON.stringify(usrBooking)) : null,
                isLoggedIn
            }
        };
    } catch (err: any) {
        console.error('Error fetching event:', err.message);
        return {
            notFound: true
        };
    }
};

export default EventPage;
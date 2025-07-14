import React from 'react';
import Link from "next/link";

const HomeAbout: React.FC = () => {
    return (
        <>
            <h3 className="display-4 mb-3">Professional Development for Public Service Excellence</h3>
            <p className="lead fs-lg lh-sm">Empowering Public Service Professionals Through Learning and Connection.</p>
            <p className="mb-6">
                The Professional Development Members' Network connects public service professionals worldwide to
                enhance skills, share knowledge, and advance careers. We provide access to <b>exclusive learning
                opportunities, expert-led training, valuable resources, and a supportive community</b> of like-minded
                professionals.
                <br/><br/>
                Through webinars, articles, events, and networking opportunities, we help you stay current with
                industry trends, develop new competencies, and build meaningful professional relationships that
                accelerate your career growth in public service.
            </p>
            <div className="d-flex gap-3 flex-wrap">
                <Link href="/articles" className="btn btn-expand btn-primary rounded-pill">
                    <i className="uil uil-arrow-right"></i>
                    <span>Explore Articles</span>
                </Link>
                <Link href="/events" className="btn btn-expand btn-secondary rounded-pill">
                    <i className="uil uil-arrow-right"></i>
                    <span>Explore Events</span>
                </Link>
            </div>
        </>
    );
};
export default HomeAbout;
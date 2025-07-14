import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';
import { AccordionProp } from 'components/common/AccordionList';
import Link from 'next/link';

const Features: FC = () => {
  return (
      <section className="container py-14 py-md-16">
        <div className="container row gy-10 gy-sm-13 gx-lg-3 align-items-center">
          <div className="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative">
            <div
              className="shape rounded-circle bg-line primary rellax w-18 h-18"
              style={{ top: '-2rem', right: '-1.9rem' }}
            />

            <div
              className="shape rounded bg-soft-primary rellax d-md-block"
              style={{ width: '85%', height: '90%', left: '-1.5rem', bottom: '-1.8rem' }}
            />

            <figure className="rounded">
              <img src="/img/photos/about9.jpg" srcSet="/img/photos/about9@2x.jpg 2x" alt="professional development" />
            </figure>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Membership Benefits</h2>
            <h2 className="display-4 mb-6">Unlock Your Professional Potential</h2>
            <AccordionList items={accordions}/>
          </div>
        </div>
      </section>
  );
};

export default Features;

const accordions: AccordionProp[] = [
  {
    no: 'One',
    expand: true,
    heading: 'Access to exclusive events',
    body: 'Participate in professional development events designed specifically for public service professionals. Connect with industry leaders and advance your career through meaningful networking opportunities.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Expert-led webinars',
    body: 'Join webinars led by industry experts and gain valuable insights and knowledge. These sessions offer deep insights into the latest trends and best practices in public service.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Access to a community of like-minded professionals',
    body: 'Share ideas, ask questions, and network with people from a variety of public service backgrounds. Build valuable relationships that support your career growth.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Curated learning resources',
    body: 'Access a comprehensive library of articles, research topics, and publications. Stay up-to-date with the latest developments in your field and explore new topics to deepen your understanding.'
  },
  {
    no: 'Five',
    expand: false,
    heading: 'Preferential rates on selected training opportunities',
    body: 'Enjoy discounted rates on selected training courses and professional development opportunities. Maximize your learning budget while investing in skills that advance your career.'
  }
];

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import './contest.css';

const Contest = () => {
  return (
    <Container fluid className='contest__main__container'>
      <Container>
        <Row>
          <Col>
            <h1 className='contest__h1'> CONTEST </h1>

            <h3 className='contest__h3'>
              For the nft owner there will be a contest in which you would win
              10k!
            </h3>
            {/* <h4 className='contest__h4'>
              So what do you have to do to participate?
            </h4>
            <p className='contest__p'>Is simple:</p> */}
            <p className='contest__p__box'>Own a Kutee Kitty!</p>
            <p className='contest__p__box'>
              Making a video while you are doing something good for the
              environment, such as planting trees, planting flowers, adopting
              animals, rescuing endangered animals, or creating new things with
              plastic in your home, could become a work of art!
            </p>
            <p className='contest__p__box'>
              At the end of the contest we will decide 10 winners and the first
              prize is an assignment of 10.000 dollars! This contest is
              restricted for only the nft's holders only for the first phase,
              then it will be open at all the world, because our goal is to
              create a community to save the world all together!
            </p>
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}>
          <HashLink
            activeClass='active'
            to='#our-team'
            spy={true}
            smooth={true}
            duration={500}
          >
            <ArrowDown className='c__arrow__down' />
          </HashLink>
        </div>
      </Container>
    </Container>
  );
};

export default Contest;

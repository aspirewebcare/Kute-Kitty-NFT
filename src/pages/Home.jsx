import { Container } from 'react-bootstrap';
import Faqs from '../components/faqs/Faqs';
import Gallery from '../components/gallery/Gallery';
import Herosection from '../components/herosection/Herosection';
import Mission from '../components/mission/Mission';
import Roadmap from '../components/roadmap/Roadmap';
// import Roadmap2 from '../components/roadmap/Roadmap2';
import Contest from '../components/contest/Contest';
import Team from '../components/team/Team';
import Utilities from '../components/utilities/Utilities';

import './home.css';
import Agency from '../components/roadmap/Agency';
import { MintDapp2 } from '../Mint/MintDapp2';

const Home = props => {
  return (
    <Container fluid className='home__wrapper'>
      <Herosection />
      <div id='our-mission'>
        <Mission />
      </div>
      <div id='gallery'>
        <Gallery />
      </div>
      {/* <div id='roadmap'>
        <Roadmap2 />
      </div>  */}
      <div id='roadmap'>
        <Roadmap />
      </div> 
      <Agency />
      <div id='utilities'>
        <Utilities />
      </div>
      <div id='contest'>
        <Contest />
      </div>
      <div id='our-team'>
        <Team />
      </div>
      <div id='faq'>
        <Faqs />
      </div>
    </Container>
  );
};

export default Home;

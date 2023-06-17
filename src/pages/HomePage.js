import HeroBanner from '../components/HeroBanner';
import Title from '../components/Title';
import HomeContent from '../components/HomeContent';

const HomePage =()=>{
    return(
        <>
        <HeroBanner />
        <Title stringTitle="Gatotips" />
        <HomeContent />
        </>
        
    );
};

export default HomePage;
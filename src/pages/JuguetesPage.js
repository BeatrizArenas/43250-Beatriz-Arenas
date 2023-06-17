import HeroBanner from '../components/HeroBanner';
import Title from '../components/Title';
import JugetesContent from '../components/JuguetesContent';

const JuguetesPage =()=>{
    return(
        <>
            <HeroBanner />
            <Title stringTitle="Juguetes" />
            <JugetesContent></JugetesContent>
        </>
    );
};

export default JuguetesPage;
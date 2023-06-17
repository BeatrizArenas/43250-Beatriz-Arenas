import HeroBanner from '../components/HeroBanner';
import Title from '../components/Title';
import AlimentacionContent from '../components/AlimentacionContent';

const AlimentacionPage =()=>{
    return(
        <>
        <HeroBanner />
        <Title stringTitle="Alimentacion" />
        <AlimentacionContent />
        </>
        
    );
};

export default AlimentacionPage;
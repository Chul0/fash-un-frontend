import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return(
        <AwesomeSlider style={{height:"500px", margin:"100px auto"}}
        media={[
          {
            source: 'https://i.ibb.co/GQMdmMj/home.png',
          },
          {
            source: 'https://assets.vogue.com/photos/6012d4685312e25a9789e6f5/master/pass/00003-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
          },
          {
            source: 'https://assets.vogue.com/photos/60112788d056dd15bb8731e3/master/pass/00003-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
          },
        ]}
      />
    )
}


export default Home
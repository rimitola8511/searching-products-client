import HomePageWelcome from "../components/HomePageWelcome";
import Image from "../images/logo_2x.png";

function Home() {
  return (
    <HomePageWelcome>
      <img src={Image} alt="Mercado libre" />
      <h2>¡Bienvenidos a Mercado Libre!</h2>
      <p>Utiliza el buscador para encontrar el producto que quieras</p>
    </HomePageWelcome>
  );
}

export default Home;

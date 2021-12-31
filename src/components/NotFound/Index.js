import HomePageWelcome from "../HomePageWelcome";

const NotFound = () => {
  return (
    <HomePageWelcome>
      <h2>No hay productos</h2>
      <p>
        No hemos encontrado ningún resultado para la busqueda, por favor intenta
        nuevamente cambiando el término utilizado
      </p>
    </HomePageWelcome>
  );
};

export default NotFound;

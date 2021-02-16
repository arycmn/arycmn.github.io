import { HomeContainer, ButtonsContainer } from "./style";
import FotoPerfil from "../../assets/images/profile_photo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <h1>arycmn.github.io</h1>
      <p>
        Hi I'm Ary, <br /> and I'm a full-stack developer under construction.
      </p>
      <img src={FotoPerfil} alt="foto de perfil" />
    </HomeContainer>
  );
};

export default Home;

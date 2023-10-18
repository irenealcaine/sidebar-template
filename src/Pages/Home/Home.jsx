import Button from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </p>
      <h2>Paragraph</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </p>
      <h2>Buttons</h2>
      <h3>Default, green, red, purple, disabled</h3>
      <Button value={"Hola"} href={"https://google.es"} />
      <Button value={"Hola"} href={"https://google.es"} color={"green"} />
      <Button value={"Hola"} href={"https://google.es"} color={"red"} />
      <Button value={"Hola"} href={"https://google.es"} color={"purple"} />
      <Button value={"Hola"} href={"https://google.es"} disabled={true} />

      <h2>Loader</h2>

      <Loader />
    </div>
  );
};

export default Home;

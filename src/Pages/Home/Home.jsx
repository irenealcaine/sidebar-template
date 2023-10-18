import BlogCard from "../../Components/BlogCard/BlogCard";
import Button from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>Subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo?
      </p>

      <h3>Paragraph</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        placeat a explicabo? Molestiae error, minus libero dolorem eveniet
        mollitia accusantium voluptate voluptates ipsa pariatur itaque ratione
        numquam ea, quo quibusdam. Voluptatibus velit tempora sed veritatis
        porro numquam repellat cum delectus. Aliquid doloremque aperiam rem
        accusamus ut, veniam velit, amet dolore, at libero voluptatem iure?
      </p>

      <h2>Buttons</h2>
      <Button value={"Default"} href={"https://google.es"} />
      <Button value={"Green"} href={"https://google.es"} color={"green"} />
      <Button value={"Red"} href={"https://google.es"} color={"red"} />
      <Button value={"Purple"} href={"https://google.es"} color={"purple"} />
      <Button
        value={"Disabled"}
        href={"https://google.es"}
        color={"purple"}
        disabled={true}
      />

      <h2>Loaders</h2>
      <Loader />
      <Loader color={"green"} />
      <Loader color={"red"} />
      <Loader color={"purple"} />

      <h2>Blog Card</h2>
      <BlogCard
        title="Introduction to JavaScript"
        content="A beginner's guide to JavaScript programming"
        author="John Doe"
        date="2023-10-18"
      />
    </div>
  );
};

export default Home;

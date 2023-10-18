import "./BlogCard.scss";

const BlogCard = ({ title, content, author, date }) => {
  return (
    <div className="blog-card">
      <h2 className="blog-card__title">{title}</h2>
      <p className="blog-card__content">{content}</p>
      <div className="blog-card__info">
        <p className="blog-card__author">Author: {author}</p>
        <p className="blog-card__date">Published on: {date}</p>
      </div>
    </div>
  );
};

export default BlogCard;

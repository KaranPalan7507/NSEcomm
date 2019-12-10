import React from "react";
import "./style.scss";
export default class Item extends React.Component {
  render() {
    const data = this.props.data;
    const imgSrc = data.images[0].image;
    const title = data.title;
    const date = new Date(data.publish_date).toLocaleDateString();
    const blog = data.body;
    const category = data.categories.map(item => item.category);
    return (
      <div className="blog-grid-item">
        <img src={imgSrc} alt={title} />
        <div>
          <span className="date">{date}</span>
          <span className="category">{category.toString()}</span>
          <div className="title">{title}</div>
          <div className="blog">{blog}</div>
        </div>
      </div>
    );
  }
}

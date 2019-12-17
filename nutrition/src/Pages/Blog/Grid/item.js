import React from "react";
import "./style.scss";
import { withRouter } from "react-router";

class Item extends React.Component {
  render() {
    const data = this.props.data;
    const imgSrc = data.images[0].image;
    const title = data.title;
    const date = new Date(data.publish_date).toLocaleDateString();
    const blog = data.body;
    const category = data.categories.map(item => item.category);
    const link = "/blogdetail/" + data.blog_id;
    return (
      <div
        className="blog-grid-item"
        onClick={() => this.props.history.push(link)}
      >
        <div className="image-wrapper">
          <img src={imgSrc} alt={title} />
        </div>
        <div>
          <span className="date">{date}</span>
          <span className="category">{category.toString()}</span>
          <div className="title">{title}</div>
          <div className="content">{blog}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Item);

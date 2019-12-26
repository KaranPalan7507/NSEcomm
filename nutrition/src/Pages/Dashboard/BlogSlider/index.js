import React from "react";
import { API } from "./../../../axios";
import Slider from "react-slick";
import "./style.scss";
import AspectRatioBackground from "./../../../Common/Background";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
class BlogSlider extends React.Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const response = await API.POST("/blog/blog_list");

    if (response.success) {
      this.setState({ posts: response.data });
    }
  }
  renderBlogItem(item, index) {
    const data = item;
    const imgSrc = data.images[0].image;
    const title = data.title;
    const date = new Date(data.publish_date).toLocaleDateString();
    const blog = data.body;
    let category = data.categories.map(item => item.category);
    category = category.join(", ");
    const link = "/blogdetail/" + data.blog_id;
    return (
      <div className="blog-carousel" key={index}>
        <div className="max-width">
          <AspectRatioBackground
            url={imgSrc}
            ratio="328:243"
          ></AspectRatioBackground>
          <div className="date-category">
            <span className="date">{date}</span>
            <span className="category">{category}</span>
          </div>
          <div className="title">{title}</div>
          <div className="blog-summary">{blog}</div>
          <div className="button-wrapper">
            <Button
              variant="outlined"
              className="red-btn-outline read-more"
              onClick={() => this.props.history.push(link)}
              color="secondary"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="blog-slider-component">
        <div className="heading"> Blogs</div>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {this.state.posts.map((item, index) =>
              this.renderBlogItem(item, index)
            )}
          </Slider>
        </div>
      </div>
    );
  }
}
export default withRouter(BlogSlider);

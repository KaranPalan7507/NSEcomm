import React from "react";
import { API } from "../../axios";
import { apis } from "../../constants";
import Loader from "./../../Common/Loader";
import "./style.scss";
import Accordian from "./../../Common/Accordian";
import Item from "./../Blog/Grid/item";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class BlogDetail extends React.Component {
  state = {
    data: {},
    isLoaded: false
  };
  mostVisitedOptions = [
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    },
    {
      title: "Looking thinner but at a 7 heavier weight? Is that possible?",
      date: "20/9/2019"
    }
  ];
  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await API.GET(apis.blogDetails + id);

    if (response.success) {
      this.setState({ data: response.data, isLoaded: true });
    }
  }
  renderMostOption(option, key) {
    return (
      <div key={key} className="most-visited-wrapper">
        <div className="title">{option.title}</div>
        <div className="date">{option.date}</div>
      </div>
    );
  }
  async postComment(e) {
    e.preventDefault(e);
    const formdata = new FormData(e.target);
    const data = {};
    data.comment = formdata.get("comment");
    data.type = "new";
    const id = this.props.match.params.id;
    const url = "/blog/" + id + "/post_comment";
    const response = await API.POST(url);
    if (response.success) {
      const id = this.props.match.params.id;
      const response = await API.GET(apis.blogDetails + id);

      if (response.success) {
        this.setState({ data: response.data, isLoaded: true });
      }
    }
  }
  render() {
    const blog = this.state.data.blogs;
    return (
      <React.Fragment>
        {this.state.isLoaded ? (
          <div className="blog-detail">
            <div className="title">{blog.title}</div>
            <div className="category">
              {blog.categories.map(item => item.category).toString()}
            </div>
            <img className="image" src={blog.images[0].image} alt="blog" />
            <div className="content-wrapper">
              <div className="left-side">
                <div className="content">{blog.body}</div>
                <div className="comment">
                  <div>
                    <span className="post-comment">Post Comment</span>
                    <form onSubmit={e => this.postComment(e)}>
                      <div className="comment-field">
                        <TextField id="name" label="Name" variant="outlined" />
                      </div>
                      <div className="comment-field">
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                        />
                      </div>
                      <div className="comment-field">
                        <TextField
                          multiline
                          rowsMax="4"
                          id="comment"
                          label="Comment"
                          variant="outlined"
                          name="comment
                          required"
                        />
                      </div>
                      <Button variant="contained" color="secondary">
                        Post Comment
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <Accordian title="Most Visited">
                  {this.mostVisitedOptions.map((option, index) =>
                    this.renderMostOption(option, index)
                  )}
                </Accordian>
                <div className="follow-section">
                  <span>FOLLOW US</span>
                  <div className="social">
                    <em className="fa fa-facebook"></em>
                    <em className="fa fa-linkedin"></em>
                    <em className="fa fa-google-plus"></em>
                    <em className="fa fa-twitter"></em>
                  </div>

                  <img src="/images/banner.png" alt="banner" />
                </div>
              </div>
            </div>
            <div className="similar-section">
              <div className="info">
                <div className="heading">Related Post</div>
                <div className="sub-text">Lorem Ispum text</div>
              </div>
              <div className="items">
                {this.state.data.similar.map((item, index) => (
                  <Item data={item} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

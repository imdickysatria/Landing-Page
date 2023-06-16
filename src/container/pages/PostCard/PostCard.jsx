import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import axios from "axios";
import "./PostCard.css";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import API from "../../../services";

class PostCard extends Component {
  state = {
    post: [],
    formPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    articles: [],
  };

  getPostAPI = () => {
    API.getNewsBlog().then((res) => {
      this.setState({
        post: res,
      });
    });
    API.getArticles().then((res) => {
      this.setState({
        articles: res.results,
      });
    });
  };

  postDataToAPI = () => {
    API.postNewsBlog(this.state.formPost).then((res) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  putDataToAPI = () => {
    API.updateNewsBlog(this.state.formPost, this.state.formPost.id).then(
      (res) => {
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      }
    );
  };

  handleUpdate = (data) => {
    this.setState({
      formPost: data,
      isUpdate: true,
    });

    console.log(data);
  };

  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    // console.log('form change', event.target);
    let formPostNew = { ...this.state.formPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formPostNew["id"] = timeStamp;
    }
    formPostNew[event.target.name] = event.target.value;

    this.setState({
      formPost: formPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  // handleDetail = (id) => {
  //     let history = useNavigate();
  //     let navigate=useNavigate()
  //     history.push(`/detail-post/${id}`);
  //     let id = this.state.post.id;
  //     axios.get(`http://localhost:3004/posts/${data}`)
  //     .then((res) => {
  //         // console.log(data);
  //     })

  // }

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <h1>Loop Post</h1>
        <hr />
        <div className="add mt-10">
          <h1 className="ml-10">Add Post</h1>
          <form className="addPost">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.formPost.title}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={this.handleFormChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Add Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text-area"
                name="body"
                id="body"
                value={this.state.formPost.body}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={this.handleFormChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Add Boddy
              </label>
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <h1 className="mt-10">List Post</h1>

        {/* {this.state.articles.map((article) => {
          return (
            <div>
              <p>{article.title}</p>
              <p>{article.id}</p>
            </div>
          );
        })} */}

        {this.state.post.map((post) => {
          // return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default PostCard;

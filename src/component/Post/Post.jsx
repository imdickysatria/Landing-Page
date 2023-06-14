import React from "react";
// import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

const Post = (props) => {
  // let navigate =useNavigate();
  return (
    <div className="postCard mt-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://placeimg.com/150/200/people"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.data.body}
          </p>
        </div>
        <button className="p-1 bg-yellow-600 text-white">
          <Link to={`/article/detail-post/${props.data.id}`}>Detail</Link>
        </button>
        {/* <button className="p-1 bg-yellow-600 text-white" onClick={() => navigate(`/article/detail-post/${props.data.id}`)}>Detail</button> */}
        {/* <button className="p-1 bg-yellow-600 text-white" onClick={() => props.goDetail(props.data.id)}>Detail</button> */}
        <button
          className="p-1 bg-blue-600 text-white"
          onClick={() => props.update(props.data)}
        >
          Edit
        </button>
        <button
          className="p-1 bg-red-600 text-white"
          onClick={() => props.remove(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postsSlice";
import "./writePage.css";

export default function WritePage() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attention, setAttention] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      setAttention("Missing field");
      return;
    }
    dispatch(createPost({title: title, desc: description}));
    navigate("/");
  }

  return (
    <div className="write-page">
      <div className="write-page-container">
        <div className="write-page-header">
          <h2 className="write-page-title">Create a new post</h2>
        </div>
        <form className="post-form">
          <div className="write-form-group">
            <label htmlFor="post-title" id="post-title-label">Title</label>
            <input
              className="postInputs"
              id="post-title"
              name="post-title"
              type="text"
              value={title}
              required
              onChange={(e) => {
                setTitle(e.target.value)
                setAttention("")
              }}
              />
          </div>
          <div className="write-form-group">
            <label htmlFor="post-description" id="post-desc-label">Description</label>
            <textarea
              className="postInputs"
              id="post-description"
              name="post-description"
              autoComplete="false"
              rows={10}
              value={description}
              required
              onChange={(e) => {
                setDescription(e.target.value)
                setAttention("")
              }}
              />
          </div>
          <div className="write-form-group">
            <div className="post-attention">{attention}</div>
            <button id="post-submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
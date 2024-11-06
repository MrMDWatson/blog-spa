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

    //const formData = new FormData(e.target);
    //const inputs = Object.fromEntries(formData);
    
    dispatch(createPost({title: title, desc: description}));
    navigate("/");
  }

  return (
    <div className="write-page">
      <div className="post-form-container">

        <form className="post-form">
          <div className="form-group">
            <label for="post-title" id="post-title-label">Title</label>
            <input
              className="postInputs"
              id="post-title"
              name="post-title"
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              />
          </div>
          <div className="form-group">
            <label for="post-description" id="post-desc-label">Description</label>
            <textarea
              className="postInputs"
              id="post-description"
              name="post-description"
              autoComplete="false"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              />
          </div>
          <div className="form-group">
            <div className="attention">{attention}</div>
            <button id="post-submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
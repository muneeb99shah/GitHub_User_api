import React from "react";

export default function GitCard(props) {
  const { login, name, avatar_url, bio, public_repos, html_url, username } =
    props;

  return (
    <>
      <div className="git-container">
        <div className="avatar-container">
          <img src={avatar_url} alt="avatar" />
        </div>
        <div className="user-data">
          <h2>{login}</h2>
          <h2>{name}</h2>
          <h2>repository: {public_repos}</h2>
          <p>{bio}</p>
          <a href={html_url} target="_blank" rel="noreferrer">
            https://api.github.com/users/${username}
          </a>
        </div>
      </div>
    </>
  );
}

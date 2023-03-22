import React, { useState } from "react";
import GitCard from "./GitCard";
import Inputgit from "./Inputgit";
import Values from "./Values";
import "./GitCard.css";
export default function Github() {
  const [takeUser, setTakeUser] = useState({
    username: "",
  });
  const [storeRecord, setStoreRecord] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setTakeUser({ ...takeUser, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // const newRecord={...takeUser}

    fetch(`https://api.github.com/users/${takeUser.username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStoreRecord(data);
      });
    setTakeUser({
      username: "",
    });

    // setStoreRecord(takeUser);
    // console.log(setStoreRecord);
    // setStoreRecord([...storeRecord,newRecord])
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <h1>Github User ID </h1>
        {Values.map((takeInput) => (
          <Inputgit
            key={takeInput.id}
            value={takeUser[takeInput.name]}
            {...takeInput}
            onChange={handleChange}
          />
        ))}
        <button type="submit ">Serach</button>
      </form>
      <div>
        {storeRecord && (
          <GitCard
            login={storeRecord.login}
            name={storeRecord.name}
            avatar_url={storeRecord.avatar_url}
            bio={storeRecord.bio}
            url={storeRecord.html_url}
            public_repos={storeRecord.public_repos}
            // html_url={storeRecord.html_url}
            // html_url={storeRecord.html_url}
            username={storeRecord.html_url}
          />
        )}
      </div>
    </>
  );
}

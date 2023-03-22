import React from "react";

export default function Inputgit(props) {
  // const {names,type,placeholder,onChange,usernames}=props
  const { onChange, ...allInputs } = props;
  return (
    <>
      <div className="valuse-container">
        <input className="valuess" {...allInputs} onChange={onChange} />
      </div>
    </>
  );
}

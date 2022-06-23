import React from "react";

const Upload = () => {
  return (
    <div className="Upload">
      <form method="" action="">
        <fieldset>
          <legend> <h3> Créer un article </h3></legend>
          <label>Le titre : </label>
          <input type="text" id="title" />
          <p>
            <label>Le contenu :</label>
            <textarea id="contents" cols="40" rows="4"></textarea>
          </p>
        </fieldset>
        <button className="send-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Upload;

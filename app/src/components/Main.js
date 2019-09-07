import React from "react";

import KudosInput from "./KudosInput"
import KudosList from "./KudosList"

export default ({ accounts }) => (
  <div className="main">
    <div>
      <h1>Kudos-o-Awesome</h1>
      <p>Marketing will love this.</p>
    </div>

    <KudosInput />
    <KudosList />
  </div>
);

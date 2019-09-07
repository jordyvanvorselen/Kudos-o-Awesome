import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import KudosInput from "./KudosInput"

export default ({ accounts }) => (
  <div className="main">
    <div>
      <h1>Kudos-o-Awesome</h1>
      <p>Marketing will love this.</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex={0} units="ether" precision={3} />
      <p>Test pub key: 0x007Dd0014306165b69aa61B43C7934fCA3D5f511</p>
    </div>

    <KudosInput />
  </div>
);

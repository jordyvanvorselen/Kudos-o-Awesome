import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

export default ({ accounts }) => (
  <div className="App">
    <div>
      <h1>Kudos-o-Awesome</h1>
      <p>Marketing will love this.</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex={0} units="ether" precision={3} />
    </div>

    <div className="section">
      <p>
        <strong>Total of Kudos given: </strong>
        <ContractData contract="KudoStorage" method="totalKudos" />
      </p>
      <ContractForm contract="KudoStorage" method="giveKudos" />
    </div>
  </div>
);

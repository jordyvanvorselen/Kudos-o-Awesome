import React from "react";
import {
  ContractData,
  ContractForm,
} from "drizzle-react-components";

export default () => (
  <div className="kudos-input">
    <div className="section">
      <p>
        <strong>Total of Kudos given: </strong>
        <ContractData contract="KudoStorage" method="totalKudos" />
      </p>
      <ContractForm contract="KudoStorage" method="giveKudos" sendArgs={{gas: 1000000}} />
    </div>
  </div>
);

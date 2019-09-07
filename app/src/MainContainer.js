import Main from './components/Main';
import {drizzleConnect} from 'drizzle-react';

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    KudoStorage: state.contracts.KudoStorage,
    drizzleStatus: state.drizzleStatus,
  };
};

const MainContainer = drizzleConnect(Main, mapStateToProps);

export default MainContainer;

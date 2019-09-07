import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RefreshButton from './RefreshButton';

class KudosList extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      transactionCount: 0,
      transactions: [],
    };
    this.kudoStorage = context.drizzle.contracts.KudoStorage;
  }

  async componentDidMount() {
    await this.refreshData();
  }

  async refreshData() {
    await this.getTransactionCount();
    await this.getTransactions();
  }

  async getTransactionCount() {
    const transactionCount = await this.kudoStorage.methods
      .kudoTransactionCount()
      .call();
    this.setState({transactionCount});
  }

  async getTransactions() {
    this.setState({transactions: []});
    for (var i = 0; i < this.state.transactionCount; i++) {
      const transaction = await this.kudoStorage.methods
        .kudoTransactions(i)
        .call();
      this.setState({transactions: [...this.state.transactions, transaction]});
    }
  }

  render() {
    return (
      <div className="kudos-list">
        <div className="section">
          {this.state.transactions.map(tx => {
            return (
              <section className="kudo-list-item">
                <h1>{tx.amount} ₭</h1>
                <p>
                  {tx.sender} gave {tx.amount}₭ to {tx.receiver} for{' '}
                  {tx.message}
                </p>
              </section>
            );
          })}
        </div>
        <RefreshButton update={() => this.refreshData()} />
      </div>
    );
  }
}

KudosList.contextTypes = {
  drizzle: PropTypes.object,
};

export default KudosList;



function TransactionHistory() {

  return (
      <div className="HistoryNavPage">
          <div className="NavPageHeader">
              <span>History</span>
          </div>
          <div className="HistoryNavPageContent">
              <div className="HistoryContents">
                  <div className="LeftHistoryContent">
                      <span>Deposit</span>
                      <p>July 5, 2023 at 5:30pm</p>
                  </div>
                  <div className="RightHistoryContent">
                      <span>0.0002525 BTC</span>
                      Success
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TransactionHistory
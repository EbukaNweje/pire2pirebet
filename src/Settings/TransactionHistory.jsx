import React from 'react'

function TransactionHistory() {

    const histories = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className='HistoryNavPage'>
    <div className='NavPageHeader'>
        <span>History</span>
    </div>
    <div className='HistoryNavPageContent'>
        {
            histories.map(()=>(
        <div className='HistoryContents'>
            <div className='LeftHistoryContent'>
                <span>Deposit</span>
                <p>July 5, 2023 at 5:30pm</p>
            </div>
            <div className='RightHistoryContent'>
                <span>0.0002525 BTC</span>
            </div>  
        </div>
            ))
        }
    </div>
</div>
  )
}

export default TransactionHistory
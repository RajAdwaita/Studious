import React, { useState } from 'react'
import { ethers } from 'ethers';
import './WalletCard.css';



const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
                accountChangedHandler(result[0]);
            })
        }
        else {
            setErrorMessage("Install Metamask")
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());
    }
    const getUserBalance = (address) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChnaged', chainChangedHandler);



    return (
        <div className='walletcard'>
            <h4>
                {"Connecting to metamask wallet..."}
            </h4>
            <button className='btn' onClick={connectWalletHandler}>{connButtonText}</button>
            <div className="accountDisplay">
                <h3>Address : {defaultAccount}</h3>
            </div>

            <div>
                <h3>Balance: {userBalance}</h3>
            </div>

            {errorMessage}

        </div>
    )
}


export default WalletCard
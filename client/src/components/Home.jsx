import React, { useContext } from "react";
import Loader from "./Loader";
import { DetailsContext } from "../context/DetailsContext";
const Home = () => {
  const { connectWallet, account, handleChange, handleSubmit, isLoading } =
    useContext(DetailsContext);
  return (
    <div className="main_container">
      <div className="section_container">
        <div className="leftSection">
          <h1>Send and Receive cryptocurrencies easily on Cryptico</h1>
          <p>Fast and easy</p>
          {!account ? (
            <button className="btn connect-btn" onClick={connectWallet}>
              Connect Account
            </button>
          ) : null}
        </div>
        <div className="rightSection">
          <div className="inputBox">
            {account && <p>Account Number: {account}</p>}
            <input
              type="text"
              name="receiverAddress"
              placeholder="Receiver's Address"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="amount"
              placeholder="Enter the Amount:"
              step="0.0001"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="message"
              placeholder="Enter your Message"
              onChange={(e) => handleChange(e)}
            />
            <hr />
            {isLoading ? (
              <Loader />
            ) : (
              <button className="btn send-btn" onClick={handleSubmit}>
                Send Eth
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

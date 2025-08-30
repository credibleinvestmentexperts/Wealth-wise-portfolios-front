import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaWallet, FaChartPie, FaHandHoldingUsd, FaUserFriends,
  FaRegListAlt, FaClock
} from "react-icons/fa";
import { TbTarget, TbFileInvoice } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPendingActions, MdVerifiedUser } from "react-icons/md";
import { AdminAuthorLink } from "../../components/protect/hiddenLink";
import "./PaymentLinks.css";

const PaymentLinks = () => {
  return (
    <div className="paymentLinksContainer">
      <NavLink to="/deposit-payment" className="paymentLinkItem">
        <p className="iconPay"><FaWallet /></p>
        <p className="depoPay">Fund Wallet</p>
      </NavLink>

      <NavLink to="/start-invest" className="paymentLinkItem">
        <p className="iconPay"><TbTarget /></p>
        <p className="depoPay">New Investment</p>
      </NavLink>

      <NavLink to="/invest-status" className="paymentLinkItem">
        <p className="iconPay"><FaChartPie /></p>
        <p className="depoPay">My Portfolio</p>
      </NavLink>

      <NavLink to="/plans" className="paymentLinkItem">
        <p className="iconPay"><FaRegListAlt /></p>
        <p className="depoPay">Available Plans</p>
      </NavLink>

      <NavLink to="/withdraw-wallet" className="paymentLinkItem">
        <p className="iconPay"><GiReceiveMoney /></p>
        <p className="depoPay">Withdraw Profit</p>
      </NavLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-wallet" className="paymentLinkItem">
          <p className="iconPay"><FaClock /></p>
          <p className="depoPay">Pending Withdrawals</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-deposit" className="paymentLinkItem">
          <p className="iconPay"><MdPendingActions /></p>
          <p className="depoPay">Pending Deposits</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/admin-pending-investment" className="paymentLinkItem">
          <p className="iconPay"><FaHandHoldingUsd /></p>
          <p className="depoPay">Investment Queue</p>
        </NavLink>
      </AdminAuthorLink>

      <AdminAuthorLink>
        <NavLink to="/pending-kyc" className="paymentLinkItem">
          <p className="iconPay"><MdVerifiedUser /></p>
          <p className="depoPay">KYC Approval</p>
        </NavLink>
      </AdminAuthorLink>

      <NavLink to="/referrals" className="paymentLinkItem">
        <p className="iconPay"><FaUserFriends /></p>
        <p className="depoPay">Referral Program</p>
      </NavLink>

      <NavLink to="/transaction-History" className="paymentLinkItem">
        <p className="iconPay"><TbFileInvoice /></p>
        <p className="depoPay">Transactions</p>
      </NavLink>
    </div>
  );
};

export default PaymentLinks;

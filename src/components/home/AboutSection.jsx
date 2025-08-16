import { Link } from "react-router-dom";
import cards from "../../assets/card-payments.jpg"
import mobile from "../../assets/mobile-money.jpg"
import pos from "../../assets/pos.jpg"
import { GoCheckCircle } from "react-icons/go";
import { LuMoveRight } from "react-icons/lu";
import disbursments from "../../assets/disbursments.jpg"
import subscriptions from "../../assets/subscription.jpg"
import crossborder from "../../assets/global.jpg"
import merchant from "../../assets/merchant.jpg"

const AboutSection = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                       <div className="about-section-content">
                                 <h3 className="about-intro"><span>Your customers are everywhere, and now your payments can be too</span>. From restaurants to e-commerce to service providers, our solutions are built to match your unique needs and make accepting payments effortless for you and your customers.</h3>
                       </div>
                       <div className="payment-solutions">
                                 <div className="payment-solutions-intro">
                                            <h3>How We can Help You</h3>
                                            <h2>Your All-in-One Payments Powerhouse</h2>
                                 </div>
                                 <div className="payments-wrap-row">
                                          <div className="payments-wrap-images">
                                                       <img src={cards} alt="Westrapay card payments" />
                                                        <img src={mobile} alt="Westrapay mobile money" />
                                                        <img src={pos} alt="Westrapay pos" />
                                          </div>
                                          <div className="payments-wrap-texts">
                                                      <h3>Payment Gateway</h3>
                                                      <p>Westrapay seamlessly connects your business to the world of digital transactions with a platform built for speed, security, and growth. Accept payments anytime, anywhere, and give your customers the smooth, reliable checkout experience they expect—whether online, in-store, or on the go.</p>

                                                      <ul>
                                                                <li><span><GoCheckCircle /></span>Card Payments (Visa, Mastercard, UnionPay)</li>
                                                                <li><span><GoCheckCircle /></span>Mobile Money (M-Pesa, Airtel Money)</li>
                                                                <li><span><GoCheckCircle /></span>Bank Transfers</li>
                                                                <li><span><GoCheckCircle /></span>E-Wallet Integration</li>
                                                                <li><span><GoCheckCircle /></span>Multi-currency and Multi-channel Transactions (Web, Mobile, POS)</li>
                                                      </ul>

                                                      <Link to={"/"}>Learn more <span><LuMoveRight /></span></Link>
                                          </div>
                                 </div>

                                 <div className="payments-solutions-grid">
                                            <div className="payment-solution-item">
                                                       <img src={disbursments} alt="Westrapay payouts & disbursments" />
                                                       <h3>Payouts / Disbursment Solutions</h3>
                                                       <p>Power your business with Westrapay, turning payouts into smooth, stress-free transactions that keep everyone satisfied.</p>
                                                       <ul>
                                                               <li><span><GoCheckCircle /></span>Bulk payments to vendors, workers, or partners</li>
                                                               <li><span><GoCheckCircle /></span>Support for mobile money and bank payouts</li>
                                                               <li><span><GoCheckCircle /></span>API or dashboard-based disbursement</li>
                                                       </ul>
                                                      
                                            </div>
                                            <div className="payment-solution-item">
                                                      <img src={subscriptions} alt="Westrapay Recurrent billing" />
                                                      <h3>Recurrent Billing & Subscriptions</h3>
                                                       <p>Westrapay works in the background so you can focus on the big picture while your payments run like clockwork.</p>
                                                       <ul>
                                                               <li><span><GoCheckCircle /></span>For SaaS, memberships, or services with regular billing cycles</li>
                                                               <li><span><GoCheckCircle /></span>Support for automated debits, reminders, and flexible billing intervals</li>
                                                       </ul>
                                            </div>
                                            <div className="payment-solution-item">
                                                     <img src={crossborder} alt="Westrapay crossborder payments" />
                                                     <h3>Cross-Border Payments</h3>
                                                       <p>With Westrapay, your business moves as freely as your ambition—across countries and continents.</p>
                                                       <ul>
                                                               <li><span><GoCheckCircle /></span>Support for international payment processing</li>
                                                               <li><span><GoCheckCircle /></span>We help African merchants reach global customers</li>
                                                               <li><span><GoCheckCircle /></span>Currency conversion and settlement tools</li>
                                                       </ul>
                                            </div>
                                            <div className="payment-solution-item">
                                                      <img src={merchant} alt="Westrapay crossborder payments" />
                                                     <h3>Merchant Acquiring</h3>
                                                       <p>Westrapay puts the power to accept payments in your hands, giving you the tools, confidence, and insights to grow your business without limits.</p>
                                                       <ul>
                                                               <li><span><GoCheckCircle /></span>We enable merchants to accept online and in-store payments</li>
                                                               <li><span><GoCheckCircle /></span>Real-time dashboards for transaction monitoring</li>
                                                               <li><span><GoCheckCircle /></span>Built-in risk and fraud management tools</li>
                                                       </ul>
                                            </div>
                                 </div>
                       </div>
             </div>
    </div>
  )
}

export default AboutSection
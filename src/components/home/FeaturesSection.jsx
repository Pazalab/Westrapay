import privacy from "../../assets/data-privacy.png"
import global from "../../assets/global-access.png"
import support from "../../assets/support.png"
import transparent from "../../assets/transparency.png"
import reports from "../../assets/report.png"
import security from "../../assets/encrypted.png"

const FeaturesSection = () => {
  return (
    <div className="features-section">
              <div className="inner-row">
                       <div className="features-section-content">
                                <div className="features-intro">
                                           <h3>Our Features</h3>
                                           <h2>Why Do Business with Westrapay</h2>
                                           <p>Every transaction is 3DS processed so you can trade boldly, grow faster, and keep customers confident.</p>
                                </div>
                                <div className="features-section-row">
                                            <div className="feature-moja">
                                                       <img src={privacy} alt="" />
                                                      <h3>Privacy You Can Trust</h3>
                                                      <p>We put your privacy first, always. Every transaction and piece of dat is handled with complete transparency and in line with global privacy standards. That means you stay protected while focusing on growing your business.</p>
                                            </div>
                                            <div className="feature-moja">
                                                       <img src={global} alt="" />
                                                       <h3>Go Global Without Limits</h3>
                                                       <p>Why stop at borders? With Westrapay, your business can accept and send payments across the world, opening doors to new customers, new markets, and endless opportunities.</p>
                                            </div>
                                            <div className="feature-moja">
                                                        <img src={support} alt="" />
                                                        <h3>24/7/365 Never ending Support</h3>
                                                        <p>Questions, issues, or just need guidance? Our support team is available 24/7 to keep your business moving — because payments shouldn’t have downtime.</p>
                                            </div>
                                            <div className="feature-moja">
                                                       <img src={transparent} alt="" />
                                                       <h3>Clear Pricing, No Surprises</h3>
                                                       <p>Forget about hidden costs. With Westrapay, you always know what you're paying for. Simple, transparent pricing keeps your finances predictable and your business confident.</p>
                                            </div>
                                            <div className="feature-moja">
                                                      <img src={reports} alt="" />
                                                      <h3>Insights That Drive Growth</h3>
                                                      <p>Get more than just numbers. Our reporting tools turn transactions into insights, helping you track performance, spot trends, and make smarter decisions.</p>
                                            </div>
                                            <div className="feature-moja">
                                                      <img src={security} alt="" />
                                                      <h3>Security That Works Overtime</h3>
                                                      <p>Your business deserves the best protection. With mult-authentication and advanced fraud detection, every transaction is locked down so you and your customers stay safe.</p>
                                            </div>
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default FeaturesSection
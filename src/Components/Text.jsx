import React from "react";
import styles from "./text.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Text() {
  return (
    <div className={styles.dropBlur}>
      <div className={styles.text}>
        <div className={styles.sideBar}>
          <Sidebar />
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.main}>
            <h2>MagnetXt Dashboard</h2>

            <h5>
              Hi, I am your trading assistant AI, MagnetXT. I will give you an
              overview of data about your portfolio, market, news, and
              everything you need. This Ai report from MagnetXt Ai, provides a
              comprehensive summary of the current cryptocurrency market and
              user-specific wallet balances...{" "}
            </h5>

            <div className="news">
              <h3>Latest News</h3>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Global Crypto Regulation Summit 2024:{" "}
                </span>{" "}
                Leaders from around the world have convened to discuss the
                future of cryptocurrency regulation, highlighting the importance
                of international cooperation...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  Revolution in Decentralized Finance:{" "}
                </span>{" "}
                A breakthrough in smart contract technology has opened new
                pathways for DeFi, potentially doubling its market size by the
                end of the year...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  SEC sues Bitcoin mining firm Geosyn over unregistered:{" "}
                </span>{" "}
                The SEC is suing a Bitcoin mining company Geosyn, alleging that
                the firm engaged in an unregistered securities offering, raising
                over $5.6 million through deceptive practices.
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Marathon to double Bitcoin mining capacity by 2024:{" "}
                </span>{" "}
                The company recently acquired a 200-megawatt Bitcoin mining
                facility from Digital Applied for $87.3 million in March, and
                two additional sites with a combined capacity of 390 megawatts
                were acquired from Generate Capital for $179 million in
                December.
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  High Court in London Rules Craig Wright Is Not Bitcoin
                  Founder:{" "}
                </span>{" "}
                The High Court in London has ruled that Australian-born computer
                expert Craig Wright is not Satoshi Nakamoto, the pseudonym of
                the cryptocurrency genius accredited with creating bitcoin.
              </p>

              <h3>Upcoming Events</h3>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  International Blockchain Congress (April 10-12, 2024):{" "}
                </span>{" "}
                Set to take place in Geneva, Switzerland, this congress will
                focus on the regulatory and ethical implications of blockchain
                technology globally...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Crypto Security Symposium (May 20-22, 2024):{" "}
                </span>{" "}
                Cybersecurity experts will gather in Tokyo, Japan, to discuss
                the latest in securing digital assets and blockchain
                technologies...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Global NFT Expo (July 5-7, 2024):{" "}
                </span>{" "}
                The expo in London will showcase the latest in NFT art,
                collectibles, and the technology powering the NFT market...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Decentralized Web Summit (August 15-17, 2024):{" "}
                </span>{" "}
                Developers, entrepreneurs, and thought leaders will converge in
                San Francisco to discuss the future of a decentralized web...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Blockchain for Good Conference (September 9-11, 2024):{" "}
                </span>{" "}
                This conference in Amsterdam will explore how blockchain
                technology can address some of the worlds most pressing social
                and environmental issues...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Virtual Reality Developers Conference (October 24-26, 2024):{" "}
                </span>{" "}
                VR developers and creatives will showcase the latest in VR
                technology and applications, with a special focus on immersive
                learning and entertainment...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  Crypto Governance and Policy Summit (November 15-17, 2024):{" "}
                </span>{" "}
                A critical forum for discussing the global policy landscape
                affecting cryptocurrency and blockchain technology...
              </p>

              <p>
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  AI and Blockchain Integration Forum (December 1-3, 2024):{" "}
                </span>{" "}
                This event will highlight the convergence of AI and blockchain
                technology, offering insights into future innovations at their
                intersection...
              </p>

              <h1>Report Date: April 27, 2024</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

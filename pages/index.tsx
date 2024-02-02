import type { NextPage } from "next";
import MultichainMemecoinCard from "../components/multichain-memecoin-card";
import styles from "./index.module.css";

const Mission: NextPage = () => {
  return (
    <div className={styles.mission}>
      <div className={styles.header14Wrapper}>
        <div className={styles.header14}>
          <div className={styles.placeholderLightbox}>
            <div className={styles.placeholderLightboxInner}>
              <div className={styles.oneCatToRuleAllChainsParent}>
                <div className={styles.oneCatTo}>
                  ONE CAT TO RULE ALL CHAINS
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.linkWrapper}>
                    <b className={styles.link}>Mission</b>
                  </div>
                  <div className={styles.linkContainer}>
                    <b className={styles.link1}>
                      OmniCat is the first omnichain culture coin, built to
                      showcase and innovate omnichain technology. We're a
                      community driven project built by contributors from all
                      over the world.Our thesis is simple: the future is
                      omnichain. Anyone who also believes in this thesis is
                      welcome to join our community.
                    </b>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.linkWrapper}>
                    <b className={styles.link}>Bridge your $Omni Now</b>
                  </div>
                  <div className={styles.image6Parent}>
                    <img
                      className={styles.image6Icon}
                      alt=""
                      src="/image-6@2x.png"
                    />
                    <div className={styles.heading}>Stargate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navbar2} />
            <div className={styles.column}>
              <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
            </div>
            <div className={styles.column1}>
            <a href="https://missionpage.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
  Mission
</a>
            <a href="https://exp-terminal.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
  Terminal
</a>
              <b className={styles.link3}>Ecosystem</b>
              <b className={styles.link3}>Statistics</b>
            </div>
            <div className={styles.column2}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/subtract.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MultichainMemecoinCard />
    </div>
  );
};

export default Mission;

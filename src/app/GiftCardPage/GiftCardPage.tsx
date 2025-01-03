"use client";

import React from "react";
import styles from "./GiftCardPage.module.css"

const GiftCards: React.FC = () => {
  return (
    <section className={styles.giftCardsSection}>
      <h1 className={styles.heading}>Want To Gift Cleanliness?</h1>
      <h2 className={styles.subHeading}>GIFT CARDS</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            hac penatibus pellentesque turpis nec quam libero. Ligula vitae
            aliquam dapibus semper odio curabitur. Cursus elementum eros odio
            pellentesque purus cras; parturient lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            hac penatibus pellentesque turpis nec quam libero. Ligula vitae
            aliquam dapibus semper odio curabitur. Cursus elementum eros odio
            pellentesque purus cras; parturient lacus
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            hac penatibus pellentesque turpis nec quam libero. Ligula vitae
            aliquam dapibus semper odio curabitur. Cursus elementum eros odio
            pellentesque purus cras; parturient lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            hac penatibus pellentesque turpis nec quam libero. Ligula vitae
            aliquam dapibus semper odio curabitur. Cursus elementum eros odio
            pellentesque purus cras; parturient lacus 
          </p>
        </div>
        <div className={styles.imageContainer}>
        <div className={styles.squareBackground}></div>
          <img
            src="/GiftCard.png"
            alt="Gift Card"
            className={styles.image}
          />
        </div>
      </div>

      {/* Gift Card Form Section */}
      <div className={styles.container}>
      <h1 className={styles.title}>GIFT CARD</h1>
      <div className={styles.amountRow}>
        <div className={styles.amount}>
        <select className={styles.dropdown}>
          <option>Amount</option>
          <option>$50</option>
          <option>$100</option>
          <option>$150</option>
          <option>$200</option>
        </select>
        </div>
      </div>
      <div className={styles.cardSection}>
        <div className={styles.backgroundImage}>
          <form className={styles.formOverlay}>
            <div className={styles.row}>
              <input type="text" placeholder="To *" className={styles.input} />
              <input type="text" placeholder="From *" className={styles.input} />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                placeholder="Recipient Email *"
                className={styles.input}
              />
              <input type="email" placeholder="Your Email *" className={styles.input} />
            </div>
            <textarea
              placeholder="Message *"
              className={styles.textarea}
            >
              Sending you a house cleaning gift, because you deserve it! ❤️
            </textarea>
          </form>
        </div>
      </div>
      <div className={styles.recaptcha}>
            <input type="checkbox" /> I'm not a robot
      </div>
      <p className={styles.note}>Note: *Gift Card Expires Every 6 Months</p>
      <button type="submit" className={styles.purchaseButton}>
        Purchase Gift Card
      </button>
      <p className={styles.finalPrice}>Final Price: $0.00</p>
    </div>
    </section>
  );
};

export default GiftCards;

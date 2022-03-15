import React from "react";
import styles from "../../../styles/Footer.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Customform from "./Customform";
const Newsletter = () => {
  const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=1f60e2fe89e067fa413f3d46a&id=8795c00aeb`;
  return (
    <div className={styles.infoBox}>
      <h1 className="text-white text-xl font-medium border-red-500">
        Newsletter
      </h1>

      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Customform
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Newsletter;

import React, { useState } from "react";
import styles from "./styles.module.css";

const LinkInputCard = () => {
  const [links, setLinks] = useState({ link1: "", link2: "", link3: "" });
  const [submittedLinks, setSubmittedLinks] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validLinks = Object.values(links).filter((link) => link);
    setSubmittedLinks(validLinks);
  };

  //   const handleShare = () => {
  //     const castText = `My favorite links are`;

  //     console.log({ castText });
  //     window.parent.postMessage(
  //       {
  //         type: "createCast",
  //         data: {
  //           cast: {
  //             text: castText,
  //             embeds: ["https://devigital.com/"],
  //           },
  //         },
  //       },
  //       "*"
  //     );
  //   };

  return (
    <>
      <div className={styles.container}>
        <h2>Enter Links</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="link1"
              placeholder="Enter Link 1"
              value={links.link1}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="text"
              name="link2"
              placeholder="Enter Link 2"
              value={links.link2}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="text"
              name="link3"
              placeholder="Enter Link 3"
              value={links.link3}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Submit Links
          </button>
        </form>
      </div>
      <div className={styles.container2}>
        {submittedLinks.length > 0 && (
          <div className={styles.cardWithLinks}>
            <h3>Links:</h3>
            {submittedLinks.map((link: any, index: any) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.cardButton}>{`Link ${
                  index + 1
                }`}</button>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LinkInputCard;

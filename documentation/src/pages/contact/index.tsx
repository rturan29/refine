import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./styles.module.css";

const Contact: React.FC = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className="container">
                    <div className="row row--justify--center row--no-gutters row--align--center">
                        <div className="col col--6">
                            <img src="/contact-page/contact_rise.png" />
                        </div>
                        <div className="col col--6">
                            <h1 className={styles.descriptionTitle}>
                                refine for <br /> <span>Enterprise</span>
                            </h1>
                            <p className={styles.descriptionBody}>
                                Your business may require{" "}
                                <span>a tailor-made solution. </span>
                                <br />
                                Our team is <span>ready to help you. </span>
                                <br />
                                <span>Let us hear about some details.</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.contactContainer}>
                        <h2>
                            Request more information about{" "}
                            <span>refine Enterprise Edition.</span>
                        </h2>
                        <form>
                            <div className="row row--justify--center">
                                <div className="col col--6">
                                    <div className="row">
                                        <div className="col col--6">
                                            <div
                                                className={
                                                    styles.inputContainer
                                                }
                                            >
                                                <label htmlFor="firstName">
                                                    First Name
                                                </label>
                                                <input
                                                    id="firstName"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col col--6">
                                            <div
                                                className={
                                                    styles.inputContainer
                                                }
                                            >
                                                <label htmlFor="lastName">
                                                    Last Name
                                                </label>
                                                <input
                                                    id="lastName"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="companyName">
                                            Company Name
                                        </label>
                                        <input
                                            id="companyName"
                                            placeholder="Company name"
                                            name="companyName"
                                            required
                                        />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="organization">
                                            What type of organization do you
                                            work for?
                                        </label>
                                        <select
                                            id="organization"
                                            required
                                            name="organization"
                                        >
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">
                                                Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col col--6">
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="postion">
                                            Your position in your company?
                                        </label>
                                        <select
                                            id="postion"
                                            required
                                            name="position"
                                        >
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">
                                                Mercedes
                                            </option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <label htmlFor="message">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={10}
                                            name="message"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row row--justify--center">
                                <div className="col col--6">
                                    <p className={styles.subDescription}>
                                        By submitting this form you consent to
                                        us emailing you occasionally. You can
                                        unsubscribe from emails at any time, and
                                        we will never pass your email onto third
                                        parties. <a href="#">Privacy Policy</a>
                                    </p>
                                </div>
                                <div className="col col--6">
                                    <div className="row">
                                        <div className="col col--5 col--offset-7">
                                            <button
                                                className={styles.submitButton}
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

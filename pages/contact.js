import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";
function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content="Contact me here" />

            </Head>
            <ContactForm />
        </Fragment>
    )

}

export default ContactPage;
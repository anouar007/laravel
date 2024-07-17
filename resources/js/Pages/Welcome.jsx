import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <main>
                <section
                    className="container-fluid text-right h-80v"
                    id="heroSection"
                >
                    <div className="row text-center pt-3 pt-5">
                        <h1 className="pb-5 display-1">
                            The Doctor Assistance
                        </h1>
                        <nav className="navbar navbar-expand-sm h5">
                            <div className="container-fluid justify-content-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#what-we-do"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#how-it-works"
                                        >
                                            How It Works
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {auth.user ? (
                                            <Link
                                                href={route("dashboard")}
                                                className="nav-link"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <Link
                                                href={route("login")}
                                                className="nav-link"
                                            >
                                                Start Now!
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <h2 className="text-white display-6 my-5 bold">
                            Empowering Doctors <br />
                            with Efficient Practice Management
                        </h2>
                        <p className="text-white h4 pt-3">
                            Streamline your workflow, manage patients <br />
                            and enhance care delivery with our comprehensive
                            toolset.
                        </p>
                    </div>
                </section>
                <section
                    className="container-fluid text-center bg-light h-70v d-flex align-items-center"
                    id="what-we-do"
                >
                    <div className="row">
                        <h1 className="bold display-1">What we do?</h1>
                        <p className="h4 mt-5 px-5">
                            At TheDoctorAssistance, we provide a comprehensive
                            suite of tools designed to streamline and enhance
                            your medical practice. Our platform helps you manage
                            patient information, schedule appointments,
                            communicate securely, and track important health
                            metrics, all in one place. Our goal is to empower
                            doctors with technology that simplifies
                            administrative tasks, allowing you to focus more on
                            patient care and less on paperwork.
                        </p>
                    </div>
                </section>
                <section
                    id="features-head"
                    className="h-40v mt-5 text-center pt-5"
                >
                    <h1 className="text-white display-1 bold">Features</h1>
                    <h3 className="text-orange mt-5 shadow-1">
                        Discover the powerful features designed to simplify your
                        practice management.
                    </h3>
                </section>
                <section id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 text-center py-5 px-4">
                                <FontAwesomeIcon
                                    className="display-1"
                                    icon="fa-solid fa-user-doctor"
                                    style={{ color: "#edb74a" }}
                                />
                                <h1 className="h2 mt-4">Patient Management</h1>
                                <p>
                                    Easily manage patient profiles, medical
                                    histories, and appointments in one secure
                                    platform.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center py-5 px-4">
                                <FontAwesomeIcon
                                    className="display-1"
                                    icon="fa-regular fa-calendar-days"
                                    style={{ color: "#edb74a" }}
                                />
                                <h1 className="h2 mt-4">
                                    Appointment Scheduling
                                </h1>
                                <p>
                                    Simplify scheduling with integrated
                                    calendars and automated reminders.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center py-5 px-4">
                                <FontAwesomeIcon
                                    className="display-1"
                                    icon="fa-regular fa-comments"
                                    style={{ color: "#edb74a" }}
                                />
                                <h1 className="h2 mt-4">
                                    Secure Communication
                                </h1>
                                <p>
                                    Communicate securely with patients through
                                    our encrypted messaging system.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center py-5 px-4">
                                <FontAwesomeIcon
                                    className="display-1"
                                    icon="fa-solid fa-heart-pulse"
                                    style={{ color: "#edb74a" }}
                                />
                                <h1 className="h2 mt-4">
                                    Analytics and Reporting
                                </h1>
                                <p>
                                    Track health metrics and generate detailed
                                    performance reports to improve care
                                    delivery.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center py-5 px-4">
                                <FontAwesomeIcon
                                    className="display-1"
                                    icon="fa-solid fa-file-invoice"
                                    style={{ color: "#edb74a" }}
                                />
                                <h1 className="h2 mt-4">
                                    Effortless Invoicing
                                </h1>
                                <p>
                                    Never chase down payments again! Our secure
                                    invoicing system simplifies billing for your
                                    practice!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="bg-light">
                    <div className="container">
                        <div className="row pt-5 mt-5 text-center">
                            <h1 className="display-1 bold mt-5 mb-3">
                                How It Works
                            </h1>
                            <p className="h5">
                                Getting started with TheDoctorAssistance is
                                simple and straightforward. Follow these easy
                                steps to streamline your practice management.
                            </p>
                        </div>
                        <div className="row my-5 pt-5 justify-content-around">
                            <div className="col-lg-3 col-md-5 text-center py-4 items">
                                <h1 className="h2 display-5 mb-4">Sign Up</h1>
                                <p className="bold">
                                    Create an account to get started with
                                    TheDoctorAssistance. Our quick and easy
                                    registration process will have you up and
                                    running in no time.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-5 text-center py-4 items">
                                <h1 className="h2 display-5 mb-4">Set Up</h1>
                                <p className="bold">
                                    Customize your profile and integrate your
                                    existing data. Our user-friendly setup guide
                                    will help you configure the platform to suit
                                    your specific needs.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-5 text-center py-4 items">
                                <h1 className="h2 display-5 mb-4">Manage</h1>
                                <p className="bold">
                                    Start managing your practice efficiently
                                    with our tools. From scheduling appointments
                                    to maintaining patient records,
                                    TheDoctorAssistance provides all the
                                    features you need to enhance your workflow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-dark mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-5 text-white">
                            <h1>The Doctor Assistance</h1>
                            <p>
                                Streamline your workflow, manage patients and
                                enhance care delivery with our comprehensive
                                toolset.
                            </p>
                        </div>
                        <div className="col-md-6 py-5 text-white d-flex justify-content-center">
                            <div className="">
                            <h1>Contact</h1> <br/>
                            <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#edb74a",}} /> +212 670035202 <br/><br/>
                            <FontAwesomeIcon icon="fa-solid fa-at" style={{color: "#edb74a",}} /> TheDoctorAssistance@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

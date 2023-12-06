import PropTypes from "prop-types";

interface LoadingProps {
  loading:string
}

export default function Loader({loading}: LoadingProps) {

  return (

    <div className="loader">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <h2>{loading}</h2>
    </div>

    /* // <section className="Loader-container">
    //   <section className="spinner-container">
    //     <section className="loading-spinner">
    //       <h1>{loading}</h1>
    //     </section>
    //   </section>
    // </section> */
  );
}

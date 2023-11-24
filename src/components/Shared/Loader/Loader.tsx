import PropTypes from "prop-types";

interface LoadingProps {
  loading:string
}

export default function Loader({loading}: LoadingProps) {

  return (
    <section className="Loader-container">
      <section className="spinner-container">
        <section className="loading-spinner">
          <h1>{loading}</h1>
        </section>
      </section>
    </section>
  );
}

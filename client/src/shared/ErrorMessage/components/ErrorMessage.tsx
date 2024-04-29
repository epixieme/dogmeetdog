import "../styles/errorMessage.css";

interface errorProps {
  error: string | undefined;
}

const ErrorMessage: React.FC<errorProps> = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <div className="error">
      <h1>{error}</h1>
    </div>
  );
};

export default ErrorMessage;

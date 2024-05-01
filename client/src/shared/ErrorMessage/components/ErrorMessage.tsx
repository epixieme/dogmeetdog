import Typography from "shared/Typography/Typography";
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
      <Typography variant={"h3"}>{error}</Typography>
    </div>
  );
};

export default ErrorMessage;

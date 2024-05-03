import Typography from "shared/Typography/Typography";
import "../styles/successMessage.css";

interface errorProps {
  success: string | undefined;
}

const SuccessMessage: React.FC<errorProps> = ({ success }) => {
  if (!success) {
    return null;
  }
  return (
    <div className="error">
      <Typography variant={"h3"}>{success}</Typography>
    </div>
  );
};

export default SuccessMessage;

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
    <div className="success-message-alignment">
      <div className="success">
        <Typography variant={"h3"}>{success}</Typography>
      </div>
    </div>
  );
};

export default SuccessMessage;

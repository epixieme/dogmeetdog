interface errorProps {
  error: string;
}

const ErrorMessage: React.FC<errorProps> = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <h1>{error}</h1>
    </div>
  );
};

export default ErrorMessage;

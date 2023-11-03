
interface errorProps {
  error: string
};


const Error: React.FC<errorProps> = ({ error }) => {
  return (
    <div
      style={
       {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '50vh',
        }
      }
    >
      <h1>{error}</h1>
    </div>
  );
}

export default Error;
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const usenavigate = useNavigate();
  const handleClick = () => {
    usenavigate("/");
  };
  return (
    <div>
      <h1>Contact section </h1>
      <button onClick={handleClick}>go to home page </button>
    </div>
  );
};

export default Contact;

import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/BackButton.css';

const BackButton = () : ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="back-button-container">
      <button className="button" onClick={() => navigate('/')}>Back</button>
    </div>
  )
};

export default BackButton;
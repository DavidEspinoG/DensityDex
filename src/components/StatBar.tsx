import { ReactElement } from "react";
import '../styles/StatBar.css';

const StatBar = ({name, amount} : {name: string, amount: number}) : ReactElement => {
  const styles = {
    backgroundColor: "orange",
    height: "20px",
    borderRadius: "10px",
    width: `${amount}%`,
    maxWidth: '100%'
  }
  return (
    <div className="stat">
      <p>{name} {amount}</p>
      <div className="stat-bar" style={styles}>

      </div>
    </div>
  )
};

export default StatBar;
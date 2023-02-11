export default function IconSwitch(props) {

  const {onSwitch, icon} = props;
  
  return (
    <div className="bar"><span className="icon material-icons" onClick={onSwitch}>{icon}</span></div>
  )
}

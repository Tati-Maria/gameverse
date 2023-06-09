/* eslint-disable react/prop-types */


const Button = ({
    action,
    text,
    icon: Icon,
    type="button",
    className="",
    disabled=false
}) => {
  return (
    <button
    disabled={disabled}
    type={type}
    onClick={action}
    className={` ${className}`}
    >
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {text && <span>{text}</span>}
    </button>
  )
}

export default Button
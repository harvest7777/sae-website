interface ButtonProps {
  "name": String;
  "className"?: String;
}
const Button: React.FC<ButtonProps> = ({ name, className }) => {
  return (
    <p className={`hover:cursor-pointer bg-primaryText text-secondaryBg outline-2 outline-secondaryBg w-fit px-2 py-1 rounded-xl ${className}`}>{name}</p>
  )
}

export default Button;

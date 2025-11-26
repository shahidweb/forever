interface IButtonProps {
  value: string;
  classes?: string;
  type?: "submit" | "reset" | "button" | undefined;
  click?: () => void;
}

function Button({
  value,
  type = "submit",
  classes = "bg-black hover:bg-gray-800 text-white",
  click,
}: IButtonProps) {
  const allClasses = `${classes} cursor-pointer px-6 py-3 font-medium uppercase transition`;
  return (
    <button type={type} className={allClasses} onClick={click}>
      {value}
    </button>
  );
}

export default Button;

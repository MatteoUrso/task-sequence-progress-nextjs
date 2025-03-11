export const Title = ({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <h3
      className={`font-medium leading-tight text-green-500 dark:text-green-400 ${
        disabled && "text-gray-500"
      }`}
    >
      {children}
    </h3>
  );
};

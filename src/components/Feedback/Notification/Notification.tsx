type Props = {
  message: string;
};

export const Notification: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

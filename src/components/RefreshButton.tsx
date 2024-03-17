/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
interface RefreshButtonProps {
  props: () => Promise<void>;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ props }) => {
  return (
    <p>
      <button onClick={async () => await props()}>asd</button>
    </p>
  );
};

export default RefreshButton;

import { format } from "date-fns";

interface LastRefreshedProps {
  props: Date;
}

function LastRefreshed({ props }: LastRefreshedProps) {
  return (
    <div>
      <p>Last refreshed: {format(props, "MMMM dd, yyyy HH:mm:ss")}</p>
    </div>
  );
}

export default LastRefreshed;

type WarningProps = {
  width?: string;
  height?: string;
};

const Warning: React.FC<WarningProps> = ({ width = "14", height = "15" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.36862 1.375H4.63138L0.875 5.13138V9.86862L4.63138 13.625H9.36862L13.125 9.86862V5.13138L9.36862 1.375ZM7.8505 11.4077H6.14862V9.70675H7.8505V11.4077ZM7.8505 8.00487H6.14862V3.7515H7.8505V8.00487Z"
        fill="#D20300"
      />
    </svg>
  );
};

export default Warning;

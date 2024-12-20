type SendProps = {
  width?: string;
  height?: string;
  dataTestid?: string;
};

const Send: React.FC<SendProps> = ({
  width = "16",
  height = "16",
  dataTestid,
}) => {
  return (
    <svg
      data-testid={dataTestid}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.81 1.367C14.665 1.253 14.47 1.227 14.3 1.302L0.799999 7.201C0.445999 7.343 0.396999 7.868 0.718999 8.073L4 10.301V14.535C3.986 14.988 4.603 15.214 4.884 14.855L7.2 12.083C7.229 12.121 7.257 12.16 7.298 12.19L11.824 15.481C12.108 15.7 12.558 15.519 12.61 15.165L14.992 1.848C15.024 1.666 14.954 1.482 14.809 1.368L14.81 1.367ZM11.603 3.571L4.472 9.413L2.031 7.755L11.603 3.571ZM5 10.272L12.634 4.019L5 13.157V10.272ZM11.767 14.203L7.886 11.382C7.864 11.366 7.838 11.361 7.814 11.349L13.493 4.55L11.766 14.203H11.767Z"
        fill="#ffff"
      />
    </svg>
  );
};

export default Send;

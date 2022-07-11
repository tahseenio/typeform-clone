const DownNav = ({ fill }: { fill: string }) => {
  return (
    <svg height='9' width='14'>
      <path
        fill={fill}
        d='M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z'
      ></path>
    </svg>
  );
};

export default DownNav;

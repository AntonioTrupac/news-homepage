const Menu = ({
  width = 40,
  height = 17,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='#00001A' fillRule='evenodd'>
        <path d='M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z' />
        <path d='M0 0h40v3H0z' />
      </g>
    </svg>
  );
};

export default Menu;

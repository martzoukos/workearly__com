export default function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          fillOpacity={0.01}
          d="M0 0h12v12H0z"
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <path
          fill="currentColor"
          d="M6 .75L4.294 4.207.48 4.76l2.76 2.69-.653 3.799L6 9.457l3.412 1.793-.652-3.799 2.76-2.688-3.814-.556L6 .75z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

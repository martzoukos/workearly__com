export default function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <g fill="#141414">
          <path d="M6 11.25A5.25 5.25 0 116 .75a5.25 5.25 0 010 10.5zM6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          <path d="M7.721 8.25L5.625 6.154V2.625h.75v3.218L8.25 7.72l-.529.529z" />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

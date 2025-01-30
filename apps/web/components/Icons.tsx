type PropsType = React.SVGProps<SVGSVGElement>;

export function RoundedCheckIcon(props: PropsType) {
  return (
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={9.5}
        cy={9}
        r={8.64}
        fill="#141414"
        stroke="#C1FF72"
        strokeWidth={0.72}
      />
      <path
        transform="translate(4.1 3.6)"
        fill="#fff"
        fillOpacity={0.01}
        style={{
          mixBlendMode: "multiply",
        }}
        d="M0 0H11.52V11.52H0z"
      />
      <path
        d="M8.78 12.24L5.54 9l.509-.51 2.73 2.731 4.892-4.89.509.509-5.4 5.4z"
        fill="#C1FF72"
      />
    </svg>
  );
}

export function ArrowUpIcon(props: PropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M3.75 8.75l.87.894 4.755-4.738V17.5h1.25V4.906l4.733 4.738.892-.894L10 2.5 3.75 8.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CircleIcon(props: PropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx={11.5} cy={12} r={11} stroke="currentColor" />
    </svg>
  );
}

export function UserIcon(props: PropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
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
        d="M2.25 11.25h7.5V9.375A2.628 2.628 0 007.125 6.75h-2.25A2.628 2.628 0 002.25 9.375v1.875zm1.125-7.875a2.625 2.625 0 105.25 0 2.625 2.625 0 00-5.25 0z"
      />
    </svg>
  );
}

export function StarIcon(props: PropsType) {
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

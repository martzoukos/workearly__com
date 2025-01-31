export default function RoundedCheckIcon(props: React.SVGProps<SVGSVGElement>) {
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

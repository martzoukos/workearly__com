export default function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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

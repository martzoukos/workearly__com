export default function Frame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={200}
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M20 20H10v60h10v10h160V80h10V20h-10V10H20z"
        fill="currentColor"
        stroke="#000"
      />
    </svg>
  );
}

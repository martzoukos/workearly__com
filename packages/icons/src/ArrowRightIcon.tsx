export default function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      {...props}
    >
      <path
        fill="#fff"
        fillOpacity={0.01}
        d="M.5 0h20v20H.5z"
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <path
        fill="#141414"
        d="M11.75 3.75l-.894.87 4.738 4.755H3v1.25h12.594l-4.738 4.733.894.892L18 10l-6.25-6.25z"
      />
    </svg>
  );
}

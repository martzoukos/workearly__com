export default function Frame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 218 76"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="a" fill="#fff">
        <path d="M0 0h9v8H0V0z" />
      </mask>
      <path d="M8 0v8h2V0H8z" fill="#141414" mask="url(#a)" />
      <mask id="b" fill="#fff">
        <path d="M0 8h9v60H0V8z" />
      </mask>
      <path d="M0 8h9v60H0V8z" fill="currentColor" />
      <path
        d="M0 8V7h-1v1h1zm0 60h-1v1h1v-1zM0 9h9V7H0v2zm9 58H0v2h9v-2zm-8 1V8h-2v60h2z"
        fill="#141414"
        mask="url(#b)"
      />
      <mask id="c" fill="#fff">
        <path d="M0 68h9v8H0v-8z" />
      </mask>
      <path d="M8 68v8h2v-8H8z" fill="#141414" mask="url(#c)" />
      <mask id="d" fill="#fff">
        <path d="M9 0h199.6v76H9V0z" />
      </mask>
      <path d="M9 0h199.6v76H9V0z" fill="currentColor" />
      <path
        d="M9 1h199.6v-2H9v2zm199.6 74H9v2h199.6v-2z"
        fill="#141414"
        mask="url(#d)"
      />
      <mask id="e" fill="#fff">
        <path d="M217.6 0h-9v8h9V0z" />
      </mask>
      <path d="M209.6 0v8h-2V0h2z" fill="#141414" mask="url(#e)" />
      <mask id="f" fill="#fff">
        <path d="M217.6 8h-9v60h9V8z" />
      </mask>
      <path d="M217.6 8h-9v60h9V8z" fill="currentColor" />
      <path
        d="M217.6 8V7h1v1h-1zm0 60h1v1h-1v-1zm0-59h-9V7h9v2zm-9 58h9v2h-9v-2zm8 1V8h2v60h-2z"
        fill="#141414"
        mask="url(#f)"
      />
      <mask id="g" fill="#fff">
        <path d="M217.6 68h-9v8h9v-8z" />
      </mask>
      <path d="M209.6 68v8h-2v-8h2z" fill="#141414" mask="url(#g)" />
    </svg>
  );
}

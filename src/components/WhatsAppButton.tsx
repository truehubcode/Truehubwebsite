import { waLink } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3C8.8 3 3 8.8 3 16c0 2.4.6 4.7 1.8 6.7L3 29l6.5-1.7c1.9 1 4.1 1.6 6.5 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.5 10.5 0 0 1 5.4 16C5.4 10.2 10.2 5.4 16 5.4S26.6 10.2 26.6 16 21.8 26.6 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.6 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi TrueHub, I would like a quotation for: ")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] py-3 pl-3 pr-4 text-sm font-bold text-white shadow-lift transition hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

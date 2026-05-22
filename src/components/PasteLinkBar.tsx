import { useState } from "react";
import { ArrowRight, Link2, Loader2, Check } from "lucide-react";

export function PasteLinkBar() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const isUrl = (v: string) => /^(https?:\/\/|www\.)\S+\.\S+/i.test(v.trim());

  const submit = async (url: string) => {
    if (!isUrl(url)) return;
    setStatus("submitting");
    // Simulate processing the link
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
    setTimeout(() => setStatus("idle"), 1800);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(value);
      }}
      className="glass-strong mx-auto mt-10 flex w-full max-w-2xl items-center gap-2 rounded-full p-2 shadow-glow"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-foreground/70 shadow-soft">
        <Link2 className="h-4 w-4" />
      </span>
      <input
        type="url"
        inputMode="url"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPaste={(e) => {
          const pasted = e.clipboardData.getData("text");
          if (pasted) {
            setValue(pasted);
            // Auto-submit on paste
            setTimeout(() => submit(pasted), 0);
          }
        }}
        placeholder="Paste any link to get started…"
        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none sm:text-base"
        aria-label="Paste a link"
      />
      <button
        type="submit"
        disabled={!isUrl(value) || status === "submitting"}
        className="inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-40"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Working
          </>
        ) : status === "done" ? (
          <>
            <Check className="h-4 w-4" /> Done
          </>
        ) : (
          <>
            Submit <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

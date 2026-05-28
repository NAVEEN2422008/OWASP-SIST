import { FC } from "react";

export const meta = {
  slug: "broken-auth-token",
  title: "Broken Auth Token Writeup",
  description: "Analyze an insecure session token flow and restore the correct authorization state.",
  dateISO: "2025-02-14",
  author: "SIST CTF Team",
  category: "Web",
  tags: ["Authentication", "Session", "Token"],
};

const BrokenAuthTokenWriteup: FC = () => (
  <>
    <h1>Broken Auth Token Writeup</h1>
    <p>
      The challenge exposes a weak authentication flow that relies on predictable token values and
      insufficient session validation.
    </p>
    <h2>What to look for</h2>
    <p>
      Start by reviewing how the application issues and verifies auth tokens. A robust flow should
      always validate the token against server-held session state, not just trust a client-side
      value.
    </p>
    <h2>Key lesson</h2>
    <p>
      Always bind token authorization to a secure server-side session or cryptographic claims. Tokens
      that are easy to predict or that depend solely on client input can be forged and abused.
    </p>
  </>
);

export default BrokenAuthTokenWriteup;

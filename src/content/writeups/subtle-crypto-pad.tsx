import { FC } from "react";

export const meta = {
  slug: "subtle-crypto-pad",
  title: "Subtle Crypto Pad Writeup",
  description: "Investigate poor cryptography assumptions and recover the hidden plaintext.",
  dateISO: "2024-12-02",
  author: "SIST Crypto Team",
  category: "Crypto",
  tags: ["Crypto", "Padding", "Analysis"],
};

const SubtleCryptoPadWriteup: FC = () => (
  <>
    <h1>Subtle Crypto Pad Writeup</h1>
    <p>
      This challenge reveals how small assumptions in cryptographic padding and randomness can
      weaken an otherwise secure-looking system.
    </p>
    <h2>Common weakness</h2>
    <p>
      Pay attention to how the padding mechanism is applied. If it can be predicted or truncated in a
      way that does not change the ciphertext format, an attacker may recover parts of the plaintext.
    </p>
    <h2>Security takeaway</h2>
    <p>
      Always validate cryptographic primitives and avoid custom padding schemes. Lean on well-tested
      libraries and clear, standard modes to reduce implementation errors.
    </p>
  </>
);

export default SubtleCryptoPadWriteup;

import { FC } from "react";

export const meta = {
  slug: "secure-learning-tracks",
  title: "Secure Learning Tracks for the Next Generation",
  description: "How OWASP SIST builds hands-on security education with real challenges and mentorship.",
  dateISO: "2025-01-12",
  author: "SIST Chapter",
  category: "Education",
  tags: ["OWASP", "Curriculum", "Security"],
};

const SecureLearningTracks: FC = () => (
  <>
    <h1>Secure Learning Tracks for the Next Generation</h1>
    <p>
      Security education is most effective when it blends theory with active practice. At OWASP SIST,
      every learning track is designed to elevate technical confidence with real influence over
      application security.
    </p>
    <p>
      Our chapter curriculum is structured around three key pillars:
    </p>
    <ul>
      <li>
        <strong>OWASP-aligned workshop modules</strong> that focus on the most critical web and
        application risks.
      </li>
      <li>
        <strong>Practical CTF challenges</strong> to turn concepts into muscle memory.
      </li>
      <li>
        <strong>Mentor-led reflection sessions</strong> that connect vulnerability discovery to secure
        architecture.
      </li>
    </ul>
    <h2>Practical experience, not just theory</h2>
    <p>
      We believe future-ready cybersecurity teams learn by doing. Each session combines conceptual
      frameworks with applied labs, vulnerability walkthroughs, and collaborative reviews.
    </p>
    <h2>Why this approach works</h2>
    <p>
      By pairing exposure to OWASP control objectives with guided challenge solving, students build a
      stable foundation that scales from beginner to advanced security problem solving.
    </p>
  </>
);

export default SecureLearningTracks;

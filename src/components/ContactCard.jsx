import { LinkPreview } from "../Lib/LinkPreview";

function ContactCard({ copied, handleCopy }) {
  return (
    <div className="bento-card3 bento-card">
      <div className="card-content">
        <div className="about-me-text mb-4">
          Let's start working together!
        </div>
        <div className="italic-text">Contact Details</div>
        <div className="relative w-fit">
          {copied && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded shadow-sm animate-fade">
              Email copied
            </div>
          )}
          <div
            className="email cursor-pointer select-none text-white hover:text-purple-400 transition"
            onClick={handleCopy}
          >
            ashishlukka2005@gmail.com
          </div>
        </div>
        <div className="country">India</div>
        <div className="socials mt-3">
          <div className="socials-text">Coding Profiles</div>
          <div className="content">
            <div className="social-link mb-2">
              <LinkPreview url="https://linktr.ee/ashishlukka">
                Linktree
              </LinkPreview>
            </div>
          </div>
          <div className="socials-text">Socials</div>
          <div className="social-link">
            <LinkPreview
              url="https://www.linkedin.com/in/ashish-lukka/"
              imageSrc="https://i.postimg.cc/HWNT4NTb/Screenshot-2025-07-02-130119.png"
              isStatic
            >
              Linkedin
            </LinkPreview>
          </div>
          <div className="social-link">
            <LinkPreview url="https://github.com/ashishlukka1">
              Github
            </LinkPreview>
          </div>
          <div className="social-link">
            <LinkPreview
              url="https://open.spotify.com/user/31ghkpczqppipovjfocgs4zhxkue"
              imageSrc="https://i.postimg.cc/VsqFXxqV/Screenshot-2025-07-02-125834.png"
              isStatic
            >
              Spotify
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

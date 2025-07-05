import { LinkPreview } from "../Lib/LinkPreview.tsx";

function ProfileCard({ setModalOpen }) {
  return (
    <div className="bento-card1 bento-card">
      <div className="card-content">
        <div className="content-left">
          <div className="text-content">
            <div className="welcome">Welcome</div>
            <p className="bento-one">
              Hello, I'm <span className="name">Ashish Lukka</span>, a
              full-stack developer, passionate about crafting seamless user
              experiences and building smart, scalable tools.
            </p>
            <p className="bento-one">
              Feel free to reach out to me if you have any projects in mind,
              or just to say hello.
            </p>
          </div>
          <div className="bento-one-socials">
            <div className="link">
              <LinkPreview
                url="https://www.linkedin.com/in/ashish-lukka/"
                imageSrc="https://i.postimg.cc/HWNT4NTb/Screenshot-2025-07-02-130119.png"
                isStatic
              >
                Linkedin
              </LinkPreview>
            </div>
            <div className="link">
              <LinkPreview url="https://github.com/ashishlukka1">
                Github
              </LinkPreview>
            </div>
            <div className="link">
              <LinkPreview
                url="https://drive.google.com/file/d/1mP-ke2wUbF7np1IzslAfWrYZvgiZZMud/view?usp=sharing"
                imageSrc="https://i.postimg.cc/J4P7HhG4/jvvhvkhv.png"
                isStatic
              >
                Resume
              </LinkPreview>
            </div>
            <div className="link">
              <button onClick={() => setModalOpen(true)}>Achievements</button>
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/ZK4vnYyj/asdasdasd.png"
          alt="Ashish Lukka - Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
}

export default ProfileCard;

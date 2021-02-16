import { Container, ContactList } from "./style";

import Linkedin from "../../assets/icons/linkedin-icon.png";
import Email from "../../assets/icons/email.png";
import Github from "../../assets/icons/Octocat.png";

const Contact = () => {
  return (
    <Container>
      <h1>Contacts</h1>
      <ContactList>
        <a href="https://www.linkedin.com/in/arycmn/">
          <div>
            <img src={Linkedin} alt="linkedin icon" width="100" />
            <p>Linkedin</p>
          </div>
        </a>

        <a href="mailto:arycmn@gmail.com">
          <div>
            <img src={Email} alt="email icon" width="100" />
            <p>E-mail</p>
          </div>
        </a>

        <a href="https://github.com/arycmn">
          <div>
            <img src={Github} alt="Github icon" width="121" />
            <p>Github</p>
          </div>
        </a>
      </ContactList>
    </Container>
  );
};

export default Contact;

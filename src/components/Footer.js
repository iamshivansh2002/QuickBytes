


  const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/shivansh-bhardwaj-2a624b200/"
          target="_blank"
          title="Shivansh Bhardwaj's Linkedin Profile"
        >
          Shivansh Bhardwaj&nbsp; 
        </a>
        <i className="fa-solid fa-copyright"></i>
        &nbsp;{year} 
        <a
          href="https://github.com/iamshivansh2002"
          target="_blank"
          title="Quick Bite Github Repository"
        >
          <strong>
            Quick<span>Bytes</span>
          </strong>
        </a>
      </div>
    </div>
  );
};

export default Footer;






const Footer = () => {
  return (
    <div className="max-w-maxw m-auto grid w-[100%] px-10 py-5 gap-3">
      <div className="flex gap-5 items-end">
        <p>About</p>
        <p>Support</p>
        <p className="mr-auto">Contact</p>
        <i className="bi bi-instagram text-2xl"></i>
        <i className="bi bi-youtube text-2xl"></i>
        <i className="bi bi-twitter-x text-2xl"></i>
        <i className="bi bi-pinterest text-2xl"></i>
        <i className="bi bi-facebook text-2xl"></i>
      </div>
      <hr />
      <p className="justify-self-end">
        © OUTFITTERS, 2025. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

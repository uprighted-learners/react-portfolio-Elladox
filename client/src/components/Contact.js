function Nav(props) {
  return (
    /* container for the contact page */
    <div className="contactContainer">
      {/* list containing the info for the page */}
      <ul>
        <li>
          Thank you for showing interest in working with me, feel free to reach
          out at any time through these methods:
        </li>
        {/* contact info listed off */}
        <li>Email : williamrotchIB@gmail.com</li>
        <li>Phone: 617-953-4326</li>
      </ul>
    </div>
  );
}
export default Nav;

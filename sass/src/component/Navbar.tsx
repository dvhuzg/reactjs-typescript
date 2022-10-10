import styles from "../Styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Profile</a>
      <a href="/">Contact</a>
    </div>
  );
};

export default Navbar;

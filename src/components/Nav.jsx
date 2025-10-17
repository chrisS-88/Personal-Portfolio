function Nav() {
  return (
    <>
      <nav className="flex flex-col md:flex-row md:justify-between md:px-10 items-center gap-5 p-6">
        <div>
          <img src="logo.png" alt="Logo" className="w-22" />
        </div>
        <ul className="text-text-dark uppercase tracking-widest flex gap-6 md:gap-9">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

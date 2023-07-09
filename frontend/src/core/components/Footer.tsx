function Footer() {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <a href="https://www.barterenergy.es/" className="hover:underline">
          IE University™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
        <li>
          <a href="/Model" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="/Locator" className="mr-4 hover:underline md:mr-6">
            Malaga Proof Of Concept
          </a>
        </li>
        <li>
          <a href="/Contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

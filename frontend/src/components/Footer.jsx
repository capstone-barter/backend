import React from "react";

function Footer() {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span class="text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <a href="https://www.barterenergy.es/" class="hover:underline">
          IE University™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
        <li>
          <a href="/Model" class="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="/Locator" class="mr-4 hover:underline md:mr-6">
            Malaga Proof Of Concept
          </a>
        </li>
        <li>
          <a href="/Contact" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
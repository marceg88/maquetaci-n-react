import "./footer.css"

function Footer(){
  return(
    <footer>
      <ul class="footer-left">
          <li><a href=""><span>Achoo</span></a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">About us</a></li>
      </ul>
      <ul class="footer-center">
          <li><a href=""><span>Support</span></a></li>
          <li><a href="">Help & Support</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">SingUp</a></li>
          <li><a href="">Log In</a></li>
      </ul>
      <ul class="footer-right">
          <li><span>Contact Us</span></li>
          <li><p>Achoo ApS</p></li>
          <li><p>Danneskiold-Samsoes Alle 41 1434 Cophenagen K Denmark</p></li>
          <li><p>Tel: +45 24 47 48 78</p></li>
      </ul>
    </footer>
  )
}

export default Footer
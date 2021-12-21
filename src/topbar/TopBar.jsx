import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            </div>
            <div className="topCentre">
<ul>
    <li className="topListItem">HOME</li>
    <li className="topListItem">ABOUT</li>
    <li className="topListItem">CONTACT</li>
    <li className="topListItem">LOGOUT</li>

</ul>

            </div>
            <div className="topRight">
                <form action="submit">
          <button>
              <input type="text" />  
              <i class="fas fa-search"></i>
          </button>
          </form>
            </div>
        </div>
    )
}

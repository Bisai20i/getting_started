import React from 'react'

export default function NavBar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`} >
    <div className="container-fluid">
    <a className="navbar-brand" style={{color: `${props.mode==='light'?'black':'white'}`}} >{props.titleName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color: `${props.mode==='light'?'black':'white'}`}}>Home</a>
        </li>
      </ul>
        <div className="form-check form-switch mx-3 mt-2" onClick={props.colorMode}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: `${props.mode==='light'?'black':'white'}`}}>Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
</>
  )
}

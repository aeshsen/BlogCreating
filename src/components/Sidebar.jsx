import React from "react";

function Sidebar({ elementname, setname }) {
  const onhandle = (tabname) => {
    setname(tabname);
  };

  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark blogsidebar">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item tabli" onClick={() => onhandle("Home")}>
          <a class= {`nav-link text-white ${ elementname ==="Home" && "active"}`}aria-current="page">
            Home
          </a>
        </li>
        <li class="nav-item tabli"  onClick={() => onhandle("Createblog")}>
          <a class= {`nav-link text-white ${ elementname ==="Createblog" && "active"}`} >Create Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

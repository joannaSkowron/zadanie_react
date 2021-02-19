// import { useEffect, useState } from "react";

import { MenuItem, Genre } from "./interfaces";
import { genres, bands, musicians } from "./data";
import NavItemComponent from "./NavItemComponent";

import "../../style/layout/nav/Nav.css";


const Nav = () => {
  const convertData = (): MenuItem[] => {
    return genres.map((genre: Genre) => {
      return {
        id: genre.id,
        title: genre.name,
        url: `/${genre.name}`,
        children: bands
          .filter((b) => genre.bands.includes(b.id))
          .map((band) => {
            return {
              id: band.id,
              title: band.name,
              url: `/${genre.name}/band=${band.id}`,
              children: musicians
                .filter((m) => band.musicians.includes(m.id))
                .map((musician) => {
                  return {
                    id: musician.id,
                    title: musician.name,
                    url: `/${genre.name}/band=${band.id}/musician=${musician.id}`
                  };
                })
            };
          })
      };
    });
  };

  const generateMenu = () => {
    const data = convertData();

    return data.map((item) => {
      return <NavItemComponent data={item} key={item.id} />;
    });
  };
  return (
    <nav className="nav">
      <ul className="nav-list">{generateMenu()}</ul>
    </nav>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import { getMenuAPI } from "../../apis";
import { sortMenuAndMarkRefIndex } from "../../utils/utils";
import MenuLayout from "./MenuLayout";

export default function Menu() {
  const [menuList, setMenuList] = useState();

  useEffect(() => {
    getMenuAPI()
      .then((res) => {
        const { sections } = res;
        sortMenuAndMarkRefIndex(sections);
        setMenuList(sections);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="max-w-6xl m-auto mt-5">
      {menuList ? <MenuLayout menuList={menuList} /> : <p>Loading..</p>}
    </div>
  );
}

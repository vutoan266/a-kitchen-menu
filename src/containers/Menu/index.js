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

  console.log(menuList);

  return (
    <div className="max-w-4xl m-auto">
      {menuList ? <MenuLayout menuList={menuList} /> : <p>Loading..</p>}
    </div>
  );
}

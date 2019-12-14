import React, { useState } from "react";
import { Menu, Icon, Button } from "antd";
import arrayMove from "array-move";

const Write = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6"
  ]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    console.log("CLICK");
    console.log(oldIndex);
    console.log(newIndex);
    setItems(() => arrayMove(items, oldIndex, newIndex));
  };

  const handleClick = () => {
    console.log("HELLO");
  };
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            {item}{" "}
            <Icon
              type="user"
              onClick={() => {
                onSortEnd(i, i - 1);
              }}
            >
              Up
            </Icon>
            <Button
              onClick={() => {
                onSortEnd(i, i + 1);
              }}
            >
              Down
            </Button>
          </div>
        );
      })}
    </>
  );
  // <Menu
  //   onClick={handleClick}
  //   style={{ width: 256 }}
  //   defaultSelectedKeys={["1"]}
  //   defaultOpenKeys={["sub1"]}
  //   mode="inline"
  // >
  //   <Menu.SubMenu
  //     key="sub1"
  //     title={
  //       <span>
  //         <Icon type="mail" />
  //         <span>Navigation One</span>
  //       </span>
  //     }
  //   ></Menu.SubMenu>
  // </Menu>
};

export default Write;

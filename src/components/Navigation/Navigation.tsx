import React, { useState, useEffect } from "react";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Book } from "../Book/Book.model";
import { getBooks } from "../../api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { useLocation } from "react-router";

export const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [books, setBooks] = useState<Book[]>([]);
  const location = useLocation();

  console.log();
  useEffect(() => {
    getBooks().then(res => setBooks(res));
  }, [user]);

  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname.split("/")[2]]}
      style={{ lineHeight: "64px" }}
    >
      {books.map((book, i) => {
        return (
          <SubMenu
            key={i}
            title={
              <span className="submenu-title-wrapper">
                <a href="/books">{book.title}</a>
              </span>
            }
          >
            {book.chapters.map((chapter, j) => {
              return (
                <Menu.Item key={chapter._id}>
                  <a href={`/chapter/${chapter._id}`}>{chapter.title}</a>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
      {/* <SubMenu
        key="write"
        title={
          <span className="submenu-title-wrapper">
            <a href="/write">
              <Icon type="book" />
              Write
            </a>
          </span>
        }
      /> */}
      {Object.keys(user).length === 0 ? (
        <SubMenu
          key="login"
          title={
            <span className="submenu-title-wrapper">
              <a href="/login">
                <LoginOutlined />
                Login
              </a>
            </span>
          }
        />
      ) : (
        <SubMenu
          key="logout"
          title={
            <span className="submenu-title-wrapper">
              <a href="/logout">
                <LogoutOutlined />
                Logout
              </a>
            </span>
          }
        />
      )}
    </Menu>
  );
};

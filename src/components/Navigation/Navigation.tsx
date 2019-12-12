import React, { useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Book } from "../Book/Book.model";
import { getBooks } from "../../api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

export const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res));
  }, [user]);

  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["matemaatika"]}
      style={{ lineHeight: "64px" }}
    >
      {books.map((book, i) => {
        return (
          <SubMenu
            key={i}
            title={
              <span className="submenu-title-wrapper">
                <a href="/books">
                  {book.icon && <Icon type={book.icon} />}
                  {book.title}
                </a>
              </span>
            }
          >
            {book.chapters.map((chapter, j) => {
              return (
                <Menu.Item key={`${chapter.title}:${j}`}>
                  <a href={`/chapter/${chapter._id}`}>{chapter.title}</a>
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
      {Object.keys(user).length === 0 ? (
        <SubMenu
          key="login"
          title={
            <span className="submenu-title-wrapper">
              <a href="/login">
                <Icon type="login" />
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
                <Icon type="logout" />
                Logout
              </a>
            </span>
          }
        />
      )}
    </Menu>
  );
};

package models

import (
	"errors"
	"fmt"
	"nway/fsgui_call/entity"
	"nway/fsgui_call/libs"
	"nway/utils/log"
	"strconv"

	"strings"
)

type DBUser struct {
	DB DbBase
}

const (
	CONNECTCHAR = "LH"
)

//返回值
//string为返回的token，采用md5对 username+CONNECTCHAR +password 生成
func (this *DBUser) CheckUser(username, password string) (string, error, int64) {
	SqlStr := "SELECT id,queue_password FROM call_queue where queue_number='" + strings.Trim(username, " ") + "'"
	rows, err := this.DB.Query(SqlStr)
	defer rows.Close()
	var id int64 = 0
	if err == nil {
		//正常获取了数据
		if rows.Next() {
			//表示查询到了数据
			var pswd string

			err = rows.Scan(&id, &pswd)
			if err == nil {
				fmt.Println("local password:", password, ",pswd:", pswd)
				if password == pswd {
					token := fmt.Sprintf("%d|%s", id, libs.Md5([]byte(username+CONNECTCHAR+password)))
					return token, nil, id
				} else {
					return "", errors.New("用户密码错误"), id
				}
			} else {
				return "", errors.New("获取密码有错误"), id
			}
		} else {
			return "", errors.New("没有查询到该用户"), id
		}

	} else {
		return "", errors.New("数据库连接获取失败"), id
	}
}

func (this *DBUser) GetCount() (int, error) {
	SqlStr := "select count(1) from cb_user"
	rows, err := this.DB.Query(SqlStr)

	defer rows.Close()
	if err != nil {
		logger.Error("Query users count error:", err)
		return 0, err
	}
	var count int = 0
	if rows.Next() {
		err = rows.Scan(&count)
		if err != nil {
			logger.Error("Query users and Scan count error:", err)
		}
		return count, err
	}
	return 0, errors.New("Not Found users Count ")
}

func (this *DBUser) GetUser(id int64) (*entity.Juser, error) {
	user := &entity.Juser{}
	SqlStr := "SELECT id, queue_number, queue_password " +
		" FROM call_queue  where id=" + strconv.FormatInt(id, 10)
	rows, err := this.DB.Query(SqlStr)
	defer rows.Close()
	if err == nil {
		//正常获取了数据
		if rows.Next() {
			//表示查询到了数据

			err = rows.Scan(&user.User_id, &user.User_name, &user.User_pwd)
			return user, err
		} else {
			return user, errors.New("没有查询到该用户")
		}

	} else {
		return user, errors.New("数据库连接获取失败")
	}

}
func (this *DBUser) FindUser(username string) (*entity.Juser, error) {
	user := &entity.Juser{}
	SqlStr := "SELECT user_name FROM cb_user  where user_name='" + strings.Trim(username, " ") + "'"
	rows, err := this.DB.Query(SqlStr)
	defer rows.Close()
	if err == nil {
		//正常获取了数据
		if rows.Next() {
			//表示查询到了数据

			err = rows.Scan(
				&user.User_name)
			if err == nil {
				return user, errors.New("用户已存在")
			} else {
				return user, nil
			}

		} else {
			return user, nil
		}

	} else {
		return user, errors.New("数据库连接获取失败")
	}

}

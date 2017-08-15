package entity

import (
	"time"
)

type User struct {
	Id         int
	UserName   string    `orm:"unique;size(20)"` // 用户名
	Password   string    `orm:"size(32)"`        // 密码
	Salt       string    `orm:"size(10)"`        // 密码盐
	Sex        int       `orm:"default(0)"`      // 性别
	Email      string    `orm:"size(50)"`        // 邮箱
	LastLogin  time.Time // 最后登录时间
	LastIp     string    `orm:"size(15)"`                    // 最后登录IP
	Status     int       `orm:"default(0)"`                  // 状态，0正常 -1禁用
	CreateTime time.Time `orm:"auto_now_add;type(datetime)"` // 创建时间
	UpdateTime time.Time `orm:"auto_now;type(datetime)"`     // 更新时间
	RoleList   []Role    `orm:"-"`                           // 角色列表
}

type UserRole struct {
	UserId int // 用户id
	RoleId int // 角色id
}

type Juser struct {
	User_id   int64
	User_name string //用户名
	User_pwd  string //密码

	Lastlogin string //最后登录时间

}

type Jcdr struct {
	Id              int64
	App_id          int64   //应用id
	Org_name        string  //组织id
	Call_id         string  //呼叫唯一id
	Call_starttime  string  //呼叫开始时间
	Call_answertime string  //呼叫应答时间
	Call_endtime    string  //呼叫结束时间
	Call_bill       float64 //通话费用
	Call_billunit   int     //计费单位数量，根据计费步长和通话时长计算
	Call_duration   int     //通话时长
	Call_rate       float64 //当前通话所使用的费率
	Caller          string
	Callee          string
	Cdr_type        int    //话单类型，0：a路，1：b路
	Extends         string //用户自定字段，原样返回
	Request_time    string //用户呼叫请求时间
	Call_route      string //当前呼叫所使用的落地

}
